---
id: 29f22486-9f74-48b5-a948-7b5325ed78ce
title: 'Provenance & Audit'
slug: provenance-and-audit
description: 'Trong hệ sinh thái y tế số, việc biết chính xác dữ liệu đến từ đâu, ai đã truy cập hay thay đổi nó, và liệu dữ liệu có được xác thực hay không là vô cùng quan trọng. FHIR R5 đã có những cải tiến đáng kể trong lĩnh vực…'
duration_minutes: 39
is_free: true
video_url: null
sort_order: 3
section_title: 'Phần 9: Bảo mật & Quyền riêng tư trong FHIR R5'
course:
  id: 019e3a00-0000-7001-e001-hl7r5000001
  title: 'HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành'
  slug: hl7-fhir-r5-chuyen-sau
---
Trong hệ sinh thái y tế số, việc biết chính xác dữ liệu đến từ đâu, ai đã truy cập hay thay đổi nó, và liệu dữ liệu có được xác thực hay không là vô cùng quan trọng. FHIR R5 đã có những cải tiến đáng kể trong lĩnh vực này thông qua hai resource chính: Provenance (nguồn gốc) và AuditEvent (sự kiện kiểm toán). Bài viết này sẽ đi sâu vào các cải tiến và cách triển khai hiệu quả các tính năng này.

### Provenance Resource: Những cải tiến trong R5

Resource Provenance trong FHIR là nền tảng để theo dõi nguồn gốc và thay đổi của dữ liệu. Nó trả lời các câu hỏi cơ bản: "dữ liệu này đến từ đâu?", "ai đã tạo hoặc thay đổi nó?", và "khi nào những thay đổi đó xảy ra?".

#### Những thay đổi chính trong R5:

**1. Cấu trúc activity được cải thiện:**

```json
"activity": {
  "coding": [
    {
      "system": "http://terminology.hl7.org/CodeSystem/v3-DataOperation",
      "code": "CREATE",
      "display": "create"
    }
  ]
}
```

R5 mở rộng bộ mã cho hoạt động, bao gồm:

* **CREATE**: Tạo mới resource
* **UPDATE**: Cập nhật resource
* **DELETE**: Xóa resource
* **MERGE**: Kết hợp nhiều resource
* **TRANSFORM**: Chuyển đổi dữ liệu
* **LINK**: Liên kết các resource
* **DERIVE**: Lấy dữ liệu từ resource khác

**2. Cải tiến trong agent:**

```json
"agent": [
  {
    "type": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
          "code": "author",
          "display": "Author"
        }
      ]
    },
    "who": {
      "reference": "Practitioner/doctor123",
      "display": "Dr. Jane Smith"
    },
    "onBehalfOf": {
      "reference": "Organization/hospital123",
      "display": "General Hospital"
    }
  }
]
```

R5 thêm các thuộc tính mới cho agent:

* **authorization**: Ủy quyền cho agent
* **role**: Vai trò của agent trong tổ chức
* **location**: Vị trí của agent (địa lý hoặc logic)

**3. Entity với signature mạnh hơn:**

```json
"entity": [
  {
    "role": "source",
    "what": {
      "reference": "Patient/pt123",
      "display": "John Doe"
    },
    "agent": {
      "who": {
        "reference": "Practitioner/dr456"
      }
    }
  }
],
"signature": [
  {
    "type": [
      {
        "system": "urn:iso-astm:E1762-95:2013",
        "code": "1.2.840.10065.1.12.1.1",
        "display": "Author's Signature"
      }
    ],
    "when": "2023-03-15T14:30:22Z",
    "who": {
      "reference": "Practitioner/doctor123"
    },
    "targetFormat": "application/fhir+json",
    "sigFormat": "application/signature+xml",
    "data": "base64-encoded-signature-data..."
  }
]
```

**4. Thêm trường `occurredPeriod` và `occurredDateTime`:**

Cho phép ghi lại thời gian chính xác hoặc khoảng thời gian của hoạt động:

```json
"occurredDateTime": "2023-03-15T14:30:22Z"
```

Hoặc:

```json
"occurredPeriod": {
  "start": "2023-03-15T14:00:00Z",
  "end": "2023-03-15T14:30:22Z"
}
```

#### Triển khai theo dõi Provenance tự động:

Dưới đây là một ví dụ về triển khai interceptor cho HAPI FHIR để tự động tạo Provenance khi có thay đổi:

```java
@Component
public class ProvenanceInterceptor extends InterceptorAdapter {
    
    @Autowired
    private IFhirSystemDao<Provenance, ?> provenanceDao;
    
    @Autowired
    private FhirContext fhirContext;
    
    @Override
    public void resourceCreated(RequestDetails theRequest, IBaseResource theResource) {
        createProvenance(theRequest, theResource, "CREATE");
    }
    
    @Override
    public void resourceUpdated(RequestDetails theRequest, IBaseResource theOldResource, IBaseResource theNewResource) {
        createProvenance(theRequest, theNewResource, "UPDATE");
    }
    
    @Override
    public void resourceDeleted(RequestDetails theRequest, IBaseResource theResource) {
        createProvenance(theRequest, theResource, "DELETE");
    }
    
    private void createProvenance(RequestDetails theRequest, IBaseResource theResource, String activity) {
        Provenance provenance = new Provenance();
        
        // Thiết lập target (resource đích)
        provenance.addTarget()
            .setReference(theResource.getIdElement().toUnqualifiedVersionless().getValue());
        
        // Thiết lập thời gian xảy ra
        provenance.setOccurredDateTimeElement(DateTimeType.now());
        
        // Thiết lập thời gian ghi lại
        provenance.setRecorded(new Date());
        
        // Thiết lập hoạt động
        Coding activityCoding = new Coding()
            .setSystem("http://terminology.hl7.org/CodeSystem/v3-DataOperation")
            .setCode(activity)
            .setDisplay(activity.toLowerCase());
        provenance.setActivity(new CodeableConcept().addCoding(activityCoding));
        
        // Thiết lập agent (người thực hiện)
        Provenance.ProvenanceAgentComponent agent = new Provenance.ProvenanceAgentComponent();
        
        // Loại agent
        Coding agentTypeCoding = new Coding()
            .setSystem("http://terminology.hl7.org/CodeSystem/provenance-participant-type")
            .setCode("author")
            .setDisplay("Author");
        agent.setType(new CodeableConcept().addCoding(agentTypeCoding));
        
        // Nếu có thông tin người dùng từ xác thực
        String userReference = theRequest.getAttribute("userReference") != null ? 
                              (String) theRequest.getAttribute("userReference") : null;
        if (userReference != null) {
            agent.setWho(new Reference(userReference));
        } else {
            // Mặc định dùng system là agent
            agent.setWho(new Reference().setDisplay("System"));
        }
        
        // Thêm thông tin tổ chức nếu có
        String orgReference = theRequest.getAttribute("organizationReference") != null ? 
                             (String) theRequest.getAttribute("organizationReference") : null;
        if (orgReference != null) {
            agent.setOnBehalfOf(new Reference(orgReference));
        }
        
        provenance.addAgent(agent);
        
        // Thiết lập entity nếu là UPDATE hoặc DELETE
        if ("UPDATE".equals(activity) || "DELETE".equals(activity)) {
            Provenance.ProvenanceEntityComponent entity = new Provenance.ProvenanceEntityComponent();
            entity.setRole(Provenance.ProvenanceEntityRole.SOURCE);
            entity.setWhat(new Reference(theResource.getIdElement().toUnqualifiedVersionless().getValue()));
            provenance.addEntity(entity);
        }
        
        // Lưu Provenance resource
        try {
            provenanceDao.create(provenance, theRequest);
        } catch (Exception e) {
            // Xử lý lỗi khi lưu Provenance
            logger.error("Lỗi khi tạo Provenance: " + e.getMessage(), e);
        }
    }
}
```

### AuditEvent Resource: Giám sát và kiểm toán

AuditEvent resource trong FHIR dùng để ghi lại các hoạt động truy cập và thay đổi trong hệ thống. Khác với Provenance tập trung vào nguồn gốc dữ liệu, AuditEvent tập trung vào an ninh và việc giám sát hệ thống.

#### Cấu trúc AuditEvent trong R5:

```json
{
  "resourceType": "AuditEvent",
  "id": "audit-patient-access-00001",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Dr. Jane Smith accessed the record of patient John Doe</div>"
  },
  "recorded": "2023-03-15T15:30:10Z",
  "status": "complete",
  "type": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/audit-event-type",
        "code": "rest",
        "display": "RESTful Operation"
      }
    ]
  },
  "subtype": [
    {
      "coding": [
        {
          "system": "http://hl7.org/fhir/restful-interaction",
          "code": "read",
          "display": "read"
        }
      ]
    }
  ],
  "action": "R",
  "severity": "informational",
  "outcome": "0",
  "outcomeDesc": "Success",
  "purposeOfEvent": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          "code": "TREAT",
          "display": "treatment"
        }
      ]
    }
  ],
  "agent": [
    {
      "type": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
            "code": "IRCP",
            "display": "information recipient"
          }
        ]
      },
      "who": {
        "reference": "Practitioner/doctor-123",
        "display": "Dr. Jane Smith"
      },
      "requestor": true,
      "location": {
        "reference": "Location/hospital-ward-123",
        "display": "Emergency Department"
      },
      "policy": [
        "https://hospital.org/policies/access/clinical-staff"
      ],
      "network": {
        "address": "192.168.0.1",
        "type": "2"
      }
    }
  ],
  "source": {
    "observer": {
      "reference": "Device/ehr-system-123",
      "display": "EHR System"
    },
    "type": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/security-source-type",
            "code": "4",
            "display": "Application Server"
          }
        ]
      }
    ]
  },
  "entity": [
    {
      "what": {
        "reference": "Patient/patient-123",
        "display": "John Doe"
      },
      "type": {
        "system": "http://terminology.hl7.org/CodeSystem/audit-entity-type",
        "code": "1",
        "display": "Person"
      },
      "role": {
        "system": "http://terminology.hl7.org/CodeSystem/object-role",
        "code": "1",
        "display": "Patient"
      },
      "description": "Patient Demographics",
      "securityLabel": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
          "code": "R",
          "display": "Restricted"
        }
      ]
    }
  ]
}
```

#### Những cải tiến trong R5:

1. **Thêm trường `status`**: Chỉ ra trạng thái của sự kiện (complete, error, in-progress)
2. **Thêm trường `severity`**: Mức độ nghiêm trọng (emergency, alert, critical, error, warning, notice, informational, debug)
3. **Cải thiện trường `purposeOfEvent`**: Mục đích của việc truy cập dữ liệu
4. **Cải thiện trường `agent.location`**: Vị trí của agent khi thực hiện hành động

#### Triển khai AuditEvent Logging:

```java
@Component
public class AuditEventInterceptor extends InterceptorAdapter {
    
    @Autowired
    private IFhirSystemDao<AuditEvent, ?> auditEventDao;
    
    @Override
    public void incomingRequestPreHandled(RequestDetails theRequest) {
        // Không ghi log cho request metadata hoặc conformance
        if (theRequest.getRequestPath().contains("metadata") || 
            theRequest.getRequestPath().contains("CapabilityStatement")) {
            return;
        }
        
        // Tạo và lưu AuditEvent cho mọi request
        createAuditEvent(theRequest);
    }
    
    private void createAuditEvent(RequestDetails theRequest) {
        try {
            AuditEvent auditEvent = new AuditEvent();
            
            // Thời gian ghi nhận
            auditEvent.setRecorded(new Date());
            
            // Trạng thái
            auditEvent.setStatus(AuditEvent.AuditEventStatus.COMPLETE);
            
            // Loại sự kiện (REST)
            Coding typeCoding = new Coding()
                .setSystem("http://terminology.hl7.org/CodeSystem/audit-event-type")
                .setCode("rest")
                .setDisplay("RESTful Operation");
            auditEvent.setType(new CodeableConcept().addCoding(typeCoding));
            
            // Subtype (Read, Update, etc.)
            Coding subtypeCoding = new Coding()
                .setSystem("http://hl7.org/fhir/restful-interaction")
                .setCode(mapOperationToInteraction(theRequest.getRestOperationType()))
                .setDisplay(mapOperationToDisplay(theRequest.getRestOperationType()));
            auditEvent.addSubtype(new CodeableConcept().addCoding(subtypeCoding));
            
            // Action (C, R, U, D, E)
            auditEvent.setAction(mapOperationToAction(theRequest.getRestOperationType()));
            
            // Mức độ nghiêm trọng
            auditEvent.setSeverity(AuditEvent.AuditEventSeverity.INFORMATIONAL);
            
            // Kết quả
            auditEvent.setOutcome(AuditEvent.AuditEventOutcome._0);
            auditEvent.setOutcomeDesc("Success");
            
            // Mục đích truy cập
            String purposeOfUse = theRequest.getHeader("X-Purpose-Of-Use");
            if (purposeOfUse != null) {
                Coding purposeCoding = new Coding()
                    .setSystem("http://terminology.hl7.org/CodeSystem/v3-ActReason")
                    .setCode(purposeOfUse)
                    .setDisplay(mapPurposeToDisplay(purposeOfUse));
                auditEvent.addPurposeOfEvent(new CodeableConcept().addCoding(purposeCoding));
            }
            
            // Agent (người thực hiện)
            AuditEvent.AuditEventAgentComponent agent = new AuditEvent.AuditEventAgentComponent();
            
            // Loại agent
            Coding agentTypeCoding = new Coding()
                .setSystem("http://terminology.hl7.org/CodeSystem/v3-ParticipationType")
                .setCode("IRCP")
                .setDisplay("information recipient");
            agent.setType(new CodeableConcept().addCoding(agentTypeCoding));
            
            // Người thực hiện
            String userReference = theRequest.getAttribute("userReference") != null ? 
                                  (String) theRequest.getAttribute("userReference") : null;
            if (userReference != null) {
                agent.setWho(new Reference(userReference));
            } else {
                agent.setWho(new Reference().setDisplay("Anonymous"));
            }
            
            // Người thực hiện là requestor
            agent.setRequestor(true);
            
            // Vị trí
            String locationReference = theRequest.getAttribute("locationReference") != null ? 
                                      (String) theRequest.getAttribute("locationReference") : null;
            if (locationReference != null) {
                agent.setLocation(new Reference(locationReference));
            }
            
            // Chính sách
            agent.addPolicy("https://hospital.org/policies/access/clinical-staff");
            
            // Thông tin mạng
            AuditEvent.AuditEventAgentNetworkComponent network = new AuditEvent.AuditEventAgentNetworkComponent();
            network.setAddress(theRequest.getServletRequest().getRemoteAddr());
            network.setType(AuditEvent.AuditEventAgentNetworkType._2); // IP Address
            agent.setNetwork(network);
            
            auditEvent.addAgent(agent);
            
            // Source (nguồn)
            AuditEvent.AuditEventSourceComponent source = new AuditEvent.AuditEventSourceComponent();
            source.setObserver(new Reference("Device/fhir-server")
                              .setDisplay("FHIR Server"));
            
            Coding sourceTypeCoding = new Coding()
                .setSystem("http://terminology.hl7.org/CodeSystem/security-source-type")
                .setCode("4")
                .setDisplay("Application Server");
            source.addType(new CodeableConcept().addCoding(sourceTypeCoding));
            
            auditEvent.setSource(source);
            
            // Entity (đối tượng tác động)
            if (theRequest.getResourceName() != null) {
                AuditEvent.AuditEventEntityComponent entity = new AuditEvent.AuditEventEntityComponent();
                
                // Xác định entity type và role dựa trên loại resource
                if (theRequest.getResourceName().equals("Patient")) {
                    entity.setType(new Coding()
                        .setSystem("http://terminology.hl7.org/CodeSystem/audit-entity-type")
                        .setCode("1")
                        .setDisplay("Person"));
                    
                    entity.setRole(new Coding()
                        .setSystem("http://terminology.hl7.org/CodeSystem/object-role")
                        .setCode("1")
                        .setDisplay("Patient"));
                    
                    // Thêm security label nếu có
                    entity.addSecurityLabel(new Coding()
                        .setSystem("http://terminology.hl7.org/CodeSystem/v3-Confidentiality")
                        .setCode("R")
                        .setDisplay("Restricted"));
                } else {
                    entity.setType(new Coding()
                        .setSystem("http://terminology.hl7.org/CodeSystem/audit-entity-type")
                        .setCode("2")
                        .setDisplay("System Object"));
                }
                
                // Tham chiếu đến resource
                if (theRequest.getId() != null) {
                    entity.setWhat(new Reference(theRequest.getResourceName() + "/" + theRequest.getId()));
                } else {
                    entity.setDescription(theRequest.getResourceName() + " resources");
                }
                
                auditEvent.addEntity(entity);
            }
            
            // Lưu AuditEvent
            auditEventDao.create(auditEvent, theRequest);
            
        } catch (Exception e) {
            // Xử lý lỗi
            logger.error("Lỗi khi tạo AuditEvent: " + e.getMessage(), e);
        }
    }
    
    private String mapOperationToInteraction(RestOperationTypeEnum operation) {
        switch (operation) {
            case READ:
                return "read";
            case VREAD:
                return "vread";
            case UPDATE:
                return "update";
            case DELETE:
                return "delete";
            case CREATE:
                return "create";
            case SEARCH_TYPE:
                return "search-type";
            case HISTORY_TYPE:
                return "history-type";
            default:
                return "search";
        }
    }
    
    private String mapOperationToDisplay(RestOperationTypeEnum operation) {
        switch (operation) {
            case READ:
                return "read";
            case VREAD:
                return "version read";
            case UPDATE:
                return "update";
            case DELETE:
                return "delete";
            case CREATE:
                return "create";
            case SEARCH_TYPE:
                return "search";
            case HISTORY_TYPE:
                return "history";
            default:
                return "search";
        }
    }
    
    private AuditEvent.AuditEventAction mapOperationToAction(RestOperationTypeEnum operation) {
        switch (operation) {
            case CREATE:
                return AuditEvent.AuditEventAction.C;
            case READ:
            case VREAD:
            case SEARCH_TYPE:
            case HISTORY_TYPE:
            case HISTORY_INSTANCE:
                return AuditEvent.AuditEventAction.R;
            case UPDATE:
                return AuditEvent.AuditEventAction.U;
            case DELETE:
                return AuditEvent.AuditEventAction.D;
            default:
                return AuditEvent.AuditEventAction.E;
        }
    }
    
    private String mapPurposeToDisplay(String purposeCode) {
        switch (purposeCode) {
            case "TREAT":
                return "treatment";
            case "HRESCH":
                return "healthcare research";
            case "PATRQT":
                return "patient requested";
            case "PUBHLTH":
                return "public health";
            default:
                return purposeCode.toLowerCase();
        }
    }
}
```

### Tracking Data Origin và Changes: Theo dõi nguồn gốc và thay đổi dữ liệu

Theo dõi nguồn gốc và thay đổi dữ liệu là một khía cạnh quan trọng của bảo mật và quản lý dữ liệu trong FHIR. R5 cung cấp nhiều công cụ hơn để thực hiện điều này.

#### 1. Ghi lại thông tin mã nguồn:

```java
@Component
public class SourceSystemInterceptor extends InterceptorAdapter {
    
    @Override
    public void processForRequest(RequestDetails theRequestDetails) {
        // Lấy thông tin hệ thống nguồn từ header
        String sourceSystem = theRequestDetails.getHeader("X-Source-System");
        if (sourceSystem != null) {
            // Lấy resource từ request (nếu có)
            IBaseResource resource = theRequestDetails.getResource();
            if (resource != null) {
                // Thêm tag cho resource để đánh dấu nguồn gốc
                Meta meta = getMeta(resource);
                
                meta.addTag()
                    .setSystem("http://terminology.hl7.org/CodeSystem/source-system")
                    .setCode(sourceSystem)
                    .setDisplay("Source: " + sourceSystem);
                
                setMeta(resource, meta);
            }
        }
    }
    
    // Phương thức helper để lấy Meta từ resource
    private Meta getMeta(IBaseResource resource) {
        if (resource instanceof IAnyResource) {
            IAnyResource anyResource = (IAnyResource) resource;
            Meta meta = (Meta) anyResource.getMeta();
            if (meta == null) {
                meta = new Meta();
                anyResource.setMeta(meta);
            }
            return meta;
        }
        return null;
    }
    
    // Phương thức helper để cập nhật Meta cho resource
    private void setMeta(IBaseResource resource, Meta meta) {
        if (resource instanceof IAnyResource) {
            IAnyResource anyResource = (IAnyResource) resource;
            anyResource.setMeta(meta);
        }
    }
}
```

#### 2. Tracking Changes bằng HistoryInterceptor:

```java
@Component
public class HistoryTrackingInterceptor extends InterceptorAdapter {
    
    @Autowired
    private IFhirSystemDao<Provenance, ?> provenanceDao;
    
    @Override
    public void resourceUpdated(RequestDetails theRequest, IBaseResource theOldResource, IBaseResource theNewResource) {
        // Tạo Provenance cho thay đổi
        Provenance provenance = createProvenance(theRequest, theOldResource, theNewResource);
        
        // Lưu Provenance
        provenanceDao.create(provenance, theRequest);
    }
    
    private Provenance createProvenance(RequestDetails theRequest, IBaseResource theOldResource, IBaseResource theNewResource) {
        Provenance provenance = new Provenance();
        
        // Thiết lập target
        provenance.addTarget()
            .setReference(theNewResource.getIdElement().toUnqualifiedVersionless().getValue());
        
        // Thiết lập thời gian
        provenance.setRecorded(new Date());
        
        // Hoạt động: UPDATE
        Coding activityCoding = new Coding()
            .setSystem("http://terminology.hl7.org/CodeSystem/v3-DataOperation")
            .setCode("UPDATE")
            .setDisplay("update");
        provenance.setActivity(new CodeableConcept().addCoding(activityCoding));
        
        // Agent
        Provenance.ProvenanceAgentComponent agent = new Provenance.ProvenanceAgentComponent();
        
        String userReference = theRequest.getAttribute("userReference") != null ? 
                              (String) theRequest.getAttribute("userReference") : null;
        if (userReference != null) {
            agent.setWho(new Reference(userReference));
        } else {
            agent.setWho(new Reference().setDisplay("System"));
        }
        
        agent.setType(new CodeableConcept().addCoding(new Coding()
            .setSystem("http://terminology.hl7.org/CodeSystem/provenance-participant-type")
            .setCode("author")
            .setDisplay("Author")));
        
        provenance.addAgent(agent);
        
        // Entity (phiên bản cũ)
        Provenance.ProvenanceEntityComponent entity = new Provenance.ProvenanceEntityComponent();
        entity.setRole(Provenance.ProvenanceEntityRole.PREDECESSOR);
        entity.setWhat(new Reference(theOldResource.getIdElement().getValue()));
        
        provenance.addEntity(entity);
        
        // Nếu có thay đổi cụ thể, ghi lại chúng
        if (theOldResource instanceof Resource && theNewResource instanceof Resource) {
            try {
                Resource oldRes = (Resource) theOldResource;
                Resource newRes = (Resource) theNewResource;
                
                // So sánh và tìm các trường thay đổi
                List<String> changes = findChanges(oldRes, newRes);
                
                // Nếu có thay đổi, thêm vào mô tả
                if (!changes.isEmpty()) {
                    entity.setDescription("Các trường thay đổi: " + String.join(", ", changes));
                }
            } catch (Exception e) {
                // Xử lý lỗi khi so sánh
            }
        }
        
        return provenance;
    }
    
    private List<String> findChanges(Resource oldRes, Resource newRes) {
        List<String> changes = new ArrayList<>();
        
        // Phương pháp đơn giản: so sánh JSON
        try {
            // Parse thành JSON
            JsonParser parser = new JsonParser();
            JsonObject oldJson = parser.parse(FhirContext.forR5().newJsonParser().encodeResourceToString(oldRes)).getAsJsonObject();
            JsonObject newJson = parser.parse(FhirContext.forR5().newJsonParser().encodeResourceToString(newRes)).getAsJsonObject();
            
            // So sánh các trường cấp cao nhất
            for (Map.Entry<String, JsonElement> entry : newJson.entrySet()) {
                String key = entry.getKey();
                
                // Bỏ qua id, meta
                if ("id".equals(key) || "meta".equals(key) || "resourceType".equals(key)) {
                    continue;
                }
                
                // Kiểm tra thay đổi
                if (!oldJson.has(key) || !oldJson.get(key).equals(entry.getValue())) {
                    changes.add(key);
                }
            }
        } catch (Exception e) {
            // Xử lý lỗi khi parse JSON
        }
        
        return changes;
    }
}
```

#### 3. Triển khai Business Rule cho Data Provenance:

```java
@Component
public class ProvenanceValidationInterceptor extends InterceptorAdapter {
    
    @Autowired
    private IFhirResourceDao<Provenance> provenanceDao;
    
    @Override
    public void incomingRequestPostProcessed(RequestDetails theRequestDetails, HttpServletRequest theRequest, HttpServletResponse theResponse) {
        // Chỉ kiểm tra cho các request đọc resource
        if (theRequestDetails.getRestOperationType() == RestOperationTypeEnum.READ || 
            theRequestDetails.getRestOperationType() == RestOperationTypeEnum.VREAD) {
            
            String resourceType = theRequestDetails.getResourceName();
            String resourceId = theRequestDetails.getId();
            
            // Nếu resource là loại quan trọng cần kiểm tra nguồn gốc
            if (isImportantResource(resourceType) && resourceId != null) {
                validateProvenanceExists(resourceType, resourceId, theRequestDetails, theResponse);
            }
        }
    }
    
private boolean isImportantResource(String resourceType) {
        // Danh sách các resource cần kiểm tra nguồn gốc
        return "DiagnosticReport".equals(resourceType) || 
               "Observation".equals(resourceType) || 
               "MedicationStatement".equals(resourceType) ||
               "CarePlan".equals(resourceType);
    }
    
    private void validateProvenanceExists(String resourceType, String resourceId, RequestDetails theRequestDetails, HttpServletResponse theResponse) {
        try {
            // Tìm kiếm Provenance cho resource này
            SearchParameterMap map = new SearchParameterMap();
            map.add("target", new ReferenceParam(resourceType + "/" + resourceId));
            IBundleProvider results = provenanceDao.search(map);
            
            // Nếu không có Provenance nào
            if (results.size() == 0) {
                // Thêm warning header
                theResponse.addHeader("X-FHIR-Warning", "Resource lacks provenance information");
                
                // Thêm thông tin vào log
                logger.warn("Resource {} không có thông tin nguồn gốc", resourceType + "/" + resourceId);
                
                // Hoặc có thể từ chối truy cập nếu cần nghiêm ngặt hơn
                // throw new AuthenticationException("Access denied: Resource lacks required provenance information");
            }
        } catch (Exception e) {
            logger.error("Lỗi khi kiểm tra Provenance: {}", e.getMessage());
        }
    }
}
```

#### 4. Theo dõi data lineage:

```java
@Component
public class DataLineageService {
    
    @Autowired
    private IFhirResourceDao<Provenance> provenanceDao;
    
    /**
     * Lấy lịch sử đầy đủ (data lineage) của một resource
     */
    public List<ProvenanceLineageItem> getResourceLineage(String resourceType, String resourceId) {
        List<ProvenanceLineageItem> lineage = new ArrayList<>();
        
        // Bước 1: Tìm tất cả Provenance có target là resource này
        SearchParameterMap targetMap = new SearchParameterMap();
        targetMap.add("target", new ReferenceParam(resourceType + "/" + resourceId));
        IBundleProvider targetResults = provenanceDao.search(targetMap);
        
        List<IBaseResource> targetProvenances = targetResults.getResources(0, targetResults.size());
        
        // Xử lý các Provenance đã tìm thấy
        for (IBaseResource resource : targetProvenances) {
            Provenance provenance = (Provenance) resource;
            
            ProvenanceLineageItem item = createLineageItem(provenance);
            lineage.add(item);
            
            // Nếu có entity, theo dõi tiếp
            for (Provenance.ProvenanceEntityComponent entity : provenance.getEntity()) {
                if (entity.getRole() == Provenance.ProvenanceEntityRole.SOURCE || 
                    entity.getRole() == Provenance.ProvenanceEntityRole.PREDECESSOR) {
                    
                    // Lấy tham chiếu đến entity
                    Reference whatRef = entity.getWhat();
                    if (whatRef.hasReference()) {
                        String reference = whatRef.getReference();
                        // Tách resourceType và id
                        String[] parts = reference.split("/");
                        if (parts.length == 2) {
                            // Đệ quy để lấy lineage của entity này
                            List<ProvenanceLineageItem> childLineage = getResourceLineage(parts[0], parts[1]);
                            item.getSourceLineage().addAll(childLineage);
                        }
                    }
                }
            }
        }
        
        return lineage;
    }
    
    private ProvenanceLineageItem createLineageItem(Provenance provenance) {
        ProvenanceLineageItem item = new ProvenanceLineageItem();
        
        // Thiết lập thông tin cơ bản
        item.setProvenanceId(provenance.getIdElement().getIdPart());
        item.setRecorded(provenance.getRecorded());
        item.setActivity(getActivityDisplay(provenance));
        
        // Thiết lập agent
        if (provenance.hasAgent()) {
            Provenance.ProvenanceAgentComponent agent = provenance.getAgentFirstRep();
            if (agent.hasWho()) {
                Reference who = agent.getWho();
                item.setAgentReference(who.getReference());
                item.setAgentDisplay(who.getDisplay());
            }
        }
        
        // Danh sách nguồn gốc
        item.setSourceLineage(new ArrayList<>());
        
        return item;
    }
    
    private String getActivityDisplay(Provenance provenance) {
        if (provenance.hasActivity() && provenance.getActivity().hasCoding()) {
            Coding activityCoding = provenance.getActivity().getCodingFirstRep();
            return activityCoding.getDisplay() != null ? activityCoding.getDisplay() : activityCoding.getCode();
        }
        return "unknown";
    }
    
    /**
     * Lớp chứa thông tin lineage của resource
     */
    public static class ProvenanceLineageItem {
        private String provenanceId;
        private Date recorded;
        private String activity;
        private String agentReference;
        private String agentDisplay;
        private List<ProvenanceLineageItem> sourceLineage;
        
        // Getters và setters
    }
}
```

### Access Controls: Kiểm soát truy cập dựa trên Provenance và AuditEvent

Việc kết hợp thông tin từ Provenance và AuditEvent có thể giúp tạo ra các cơ chế kiểm soát truy cập mạnh mẽ hơn.

#### 1. Kiểm soát truy cập dựa trên nguồn gốc dữ liệu:

```java
@Component
public class ProvenanceBasedAccessControl extends InterceptorAdapter {
    
    @Autowired
    private IFhirResourceDao<Provenance> provenanceDao;
    
    @Override
    public boolean incomingRequestPreHandled(RequestDetails theRequestDetails, HttpServletRequest theRequest, HttpServletResponse theResponse) {
        // Lấy thông tin người dùng từ context
        String userReference = theRequestDetails.getAttribute("userReference") != null ? 
                              (String) theRequestDetails.getAttribute("userReference") : null;
        
        // Chỉ áp dụng cho GET requests cụ thể
        if (theRequestDetails.getRequestType() == RequestTypeEnum.GET && 
            theRequestDetails.getRestOperationType() == RestOperationTypeEnum.READ && 
            theRequestDetails.getId() != null) {
            
            String resourceType = theRequestDetails.getResourceName();
            String resourceId = theRequestDetails.getId();
            
            // Kiểm tra quyền truy cập dựa trên Provenance
            if (shouldCheckProvenance(resourceType)) {
                boolean hasAccess = checkProvenanceAccess(resourceType, resourceId, userReference);
                
                if (!hasAccess) {
                    throw new AuthenticationException("Access denied based on resource provenance");
                }
            }
        }
        
        return true;
    }
    
    private boolean shouldCheckProvenance(String resourceType) {
        // Áp dụng cho các resource nhạy cảm
        return "DiagnosticReport".equals(resourceType) || 
               "Observation".equals(resourceType) && isRestrictedObservation();
    }
    
    private boolean checkProvenanceAccess(String resourceType, String resourceId, String userReference) {
        // Tìm kiếm Provenance của resource
        SearchParameterMap map = new SearchParameterMap();
        map.add("target", new ReferenceParam(resourceType + "/" + resourceId));
        
        try {
            List<IBaseResource> provenances = provenanceDao.search(map)
                .getResources(0, 100);
            
            // Nếu không có Provenance, áp dụng chính sách mặc định
            if (provenances.isEmpty()) {
                return applyDefaultPolicy();
            }
            
            // Kiểm tra từng Provenance
            for (IBaseResource res : provenances) {
                Provenance provenance = (Provenance) res;
                
                // Quy tắc: Người dùng chỉ được truy cập dữ liệu nếu họ là tác giả
                // hoặc cùng tổ chức với tác giả
                if (isAuthorOrSameOrganization(provenance, userReference)) {
                    return true;
                }
                
                // Quy tắc: Dữ liệu từ hệ thống nguồn đáng tin cậy luôn được truy cập
                if (isFromTrustedSystem(provenance)) {
                    return true;
                }
            }
            
            // Nếu không tìm thấy quy tắc cho phép
            return false;
            
        } catch (Exception e) {
            // Trong trường hợp lỗi, áp dụng chính sách mặc định
            logger.error("Lỗi khi kiểm tra Provenance: {}", e.getMessage());
            return applyDefaultPolicy();
        }
    }
    
    private boolean isAuthorOrSameOrganization(Provenance provenance, String userReference) {
        if (userReference == null) {
            return false;
        }
        
        for (Provenance.ProvenanceAgentComponent agent : provenance.getAgent()) {
            // Kiểm tra nếu là tác giả trực tiếp
            if (agent.hasWho() && agent.getWho().hasReference() && 
                userReference.equals(agent.getWho().getReference())) {
                return true;
            }
            
            // Kiểm tra nếu cùng tổ chức
            if (agent.hasOnBehalfOf() && agent.getOnBehalfOf().hasReference()) {
                String orgReference = agent.getOnBehalfOf().getReference();
                if (isUserInOrganization(userReference, orgReference)) {
                    return true;
                }
            }
        }
        
        return false;
    }
    
    private boolean isUserInOrganization(String userReference, String orgReference) {
        // Triển khai logic kiểm tra người dùng thuộc tổ chức
        // (Có thể truy vấn PractitionerRole hoặc sử dụng cache)
        return true; // Giả định
    }
    
    private boolean isFromTrustedSystem(Provenance provenance) {
        // Kiểm tra xem dữ liệu có nguồn gốc từ hệ thống đáng tin cậy không
        if (provenance.hasAgent()) {
            for (Provenance.ProvenanceAgentComponent agent : provenance.getAgent()) {
                if (agent.hasType() && agent.getType().hasCoding()) {
                    for (Coding coding : agent.getType().getCoding()) {
                        if ("device".equals(coding.getCode()) && 
                            agent.hasWho() && agent.getWho().hasReference()) {
                            
                            String deviceRef = agent.getWho().getReference();
                            return isTrustedDevice(deviceRef);
                        }
                    }
                }
            }
        }
        return false;
    }
    
    private boolean isTrustedDevice(String deviceRef) {
        // Danh sách thiết bị đáng tin cậy
        return deviceRef.contains("laboratory-system") || 
               deviceRef.contains("trusted-ehr") || 
               deviceRef.contains("certified-device");
    }
    
    private boolean applyDefaultPolicy() {
        // Chính sách mặc định khi không tìm thấy Provenance
        // Có thể cho phép hoặc từ chối tùy theo yêu cầu
        return false; // Từ chối mặc định để an toàn
    }
}
```

#### 2. Kiểm soát truy cập dựa trên mẫu truy cập:

```java
@Component
public class AccessPatternEnforcer extends InterceptorAdapter {
    
    @Autowired
    private IFhirResourceDao<AuditEvent> auditEventDao;
    
    // Cấu hình
    private static final int MAX_PATIENT_RECORDS_PER_HOUR = 20;
    private static final int MAX_SENSITIVE_RECORDS_PER_DAY = 10;
    private static final int UNUSUAL_TIME_START_HOUR = 22; // 10 PM
    private static final int UNUSUAL_TIME_END_HOUR = 6;    // 6 AM
    
    @Override
    public boolean incomingRequestPreHandled(RequestDetails theRequestDetails, HttpServletRequest theRequest, HttpServletResponse theResponse) {
        // Lấy thông tin người dùng
        String userReference = theRequestDetails.getAttribute("userReference") != null ? 
                              (String) theRequestDetails.getAttribute("userReference") : null;
        
        // Chỉ áp dụng cho truy cập dữ liệu bệnh nhân
        if (isPatientDataAccess(theRequestDetails) && userReference != null) {
            try {
                // Kiểm tra mẫu truy cập bất thường
                checkAccessPatterns(userReference, theRequestDetails);
            } catch (AuthenticationException e) {
                // Lưu sự kiện kiểm toán thất bại
                logBlockedAccess(userReference, theRequestDetails, e.getMessage());
                throw e;
            }
        }
        
        return true;
    }
    
    private boolean isPatientDataAccess(RequestDetails theRequestDetails) {
        String resourceType = theRequestDetails.getResourceName();
        return "Patient".equals(resourceType) || 
               "Observation".equals(resourceType) || 
               "DiagnosticReport".equals(resourceType) || 
               "MedicationStatement".equals(resourceType) || 
               "Condition".equals(resourceType);
    }
    
    private void checkAccessPatterns(String userReference, RequestDetails theRequestDetails) {
        // Kiểm tra tần suất truy cập hồ sơ bệnh nhân
        int patientRecordsLastHour = countPatientRecordAccess(userReference, 1);
        if (patientRecordsLastHour > MAX_PATIENT_RECORDS_PER_HOUR) {
            throw new AuthenticationException("Suspicious access pattern: Too many patient records accessed in last hour");
        }
        
        // Kiểm tra truy cập dữ liệu nhạy cảm
        if (isSensitiveResource(theRequestDetails)) {
            int sensitiveRecordsToday = countSensitiveRecordAccess(userReference, 24);
            if (sensitiveRecordsToday > MAX_SENSITIVE_RECORDS_PER_DAY) {
                throw new AuthenticationException("Suspicious access pattern: Too many sensitive records accessed today");
            }
        }
        
        // Kiểm tra thời gian truy cập bất thường
        if (isUnusualAccessTime() && !isEmergencyAccess(theRequestDetails)) {
            throw new AuthenticationException("Suspicious access pattern: Access during unusual hours without emergency purpose");
        }
        
        // Kiểm tra mẫu truy cập địa lý bất thường
        if (isUnusualGeographicAccess(userReference, theRequestDetails)) {
            throw new AuthenticationException("Suspicious access pattern: Unusual geographic access location");
        }
    }
    
    private int countPatientRecordAccess(String userReference, int hoursBack) {
        // Tìm kiếm các sự kiện truy cập trong khoảng thời gian
        Date startTime = new Date(System.currentTimeMillis() - hoursBack * 3600 * 1000);
        
        SearchParameterMap map = new SearchParameterMap();
        map.add("agent", new ReferenceParam(userReference));
        map.add("date", new DateRangeParam(startTime, null));
        
        IBundleProvider results = auditEventDao.search(map);
        return results.size();
    }
    
    private int countSensitiveRecordAccess(String userReference, int hoursBack) {
        // Tìm kiếm các sự kiện truy cập dữ liệu nhạy cảm
        Date startTime = new Date(System.currentTimeMillis() - hoursBack * 3600 * 1000);
        
        SearchParameterMap map = new SearchParameterMap();
        map.add("agent", new ReferenceParam(userReference));
        map.add("date", new DateRangeParam(startTime, null));
        
        // Đếm số lượng
        IBundleProvider results = auditEventDao.search(map);
        
        int count = 0;
        List<IBaseResource> resources = results.getResources(0, results.size());
        for (IBaseResource resource : resources) {
            AuditEvent audit = (AuditEvent) resource;
            
            // Kiểm tra có phải dữ liệu nhạy cảm không
            if (hasSensitiveEntityLabel(audit)) {
                count++;
            }
        }
        
        return count;
    }
    
    private boolean hasSensitiveEntityLabel(AuditEvent audit) {
        for (AuditEvent.AuditEventEntityComponent entity : audit.getEntity()) {
            for (Coding label : entity.getSecurityLabel()) {
                String system = label.getSystem();
                String code = label.getCode();
                
                // Kiểm tra các label nhạy cảm
                if ("http://terminology.hl7.org/CodeSystem/v3-ActCode".equals(system)) {
                    if ("HIV".equals(code) || "PSY".equals(code) || "ETH".equals(code) || "SDV".equals(code)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    
    private boolean isSensitiveResource(RequestDetails theRequestDetails) {
        String resourceType = theRequestDetails.getResourceName();
        
        // Danh sách resource mặc định nhạy cảm
        if ("DiagnosticReport".equals(resourceType) || "Observation".equals(resourceType)) {
            // Có thể kiểm tra thêm các tham số để xác định loại cụ thể
            String code = theRequestDetails.getParameters().get("code");
            if (code != null) {
                return code.contains("HIV") || code.contains("substance") || code.contains("mental");
            }
        }
        
        return false;
    }
    
    private boolean isUnusualAccessTime() {
        Calendar cal = Calendar.getInstance();
        int currentHour = cal.get(Calendar.HOUR_OF_DAY);
        
        return currentHour >= UNUSUAL_TIME_START_HOUR || currentHour < UNUSUAL_TIME_END_HOUR;
    }
    
    private boolean isEmergencyAccess(RequestDetails theRequestDetails) {
        // Kiểm tra header hoặc tham số chỉ định truy cập khẩn cấp
        String purpose = theRequestDetails.getHeader("X-Purpose-Of-Use");
        return "ETREAT".equals(purpose) || "EMER".equals(purpose);
    }
    
    private boolean isUnusualGeographicAccess(String userReference, RequestDetails theRequestDetails) {
        // Lấy IP hiện tại
        String currentIp = theRequestDetails.getServletRequest().getRemoteAddr();
        
        // Tìm IP truy cập gần đây nhất
        String recentIp = findRecentAccessIp(userReference);
        
        if (recentIp != null && !recentIp.equals(currentIp)) {
            // Tính khoảng cách địa lý giữa các IP
            if (isIpDistanceAnomalous(recentIp, currentIp)) {
                return true;
            }
        }
        
        return false;
    }
    
    private String findRecentAccessIp(String userReference) {
        // Tìm kiếm truy cập gần đây nhất
        SearchParameterMap map = new SearchParameterMap();
        map.add("agent", new ReferenceParam(userReference));
        map.add("date", new DateRangeParam().setLowerBoundInclusive(new Date(System.currentTimeMillis() - 24 * 3600 * 1000)));
        map.setSort(new SortSpec("date", SortOrderEnum.DESC));
        map.setCount(1);
        
        IBundleProvider results = auditEventDao.search(map);
        if (results.size() > 0) {
            AuditEvent audit = (AuditEvent) results.getResources(0, 1).get(0);
            
            // Lấy IP từ audit
            if (audit.hasAgent() && audit.getAgentFirstRep().hasNetwork()) {
                return audit.getAgentFirstRep().getNetwork().getAddress();
            }
        }
        
        return null;
    }
    
    private boolean isIpDistanceAnomalous(String ip1, String ip2) {
        // Triển khai logic phát hiện bất thường về khoảng cách địa lý
        // Có thể sử dụng dịch vụ geolocation để kiểm tra
        
        return false; // Giả định
    }
    
    private void logBlockedAccess(String userReference, RequestDetails theRequestDetails, String reason) {
        AuditEvent auditEvent = new AuditEvent();
        
        // Thiết lập thông tin cơ bản
        auditEvent.setRecorded(new Date());
        auditEvent.setAction(AuditEvent.AuditEventAction.E);
        auditEvent.setOutcome(AuditEvent.AuditEventOutcome._8);
        auditEvent.setOutcomeDesc("Access blocked: " + reason);
        
        // Mức độ nghiêm trọng: cảnh báo
        auditEvent.setSeverity(AuditEvent.AuditEventSeverity.WARNING);
        
        // Loại: security alert
        auditEvent.setType(new CodeableConcept().addCoding(new Coding()
            .setSystem("http://terminology.hl7.org/CodeSystem/audit-event-type")
            .setCode("security-alert")
            .setDisplay("Security Alert")));
        
        // Agent
        AuditEvent.AuditEventAgentComponent agent = new AuditEvent.AuditEventAgentComponent();
        agent.setWho(new Reference(userReference));
        agent.setRequestor(true);
        
        // Network
        AuditEvent.AuditEventAgentNetworkComponent network = new AuditEvent.AuditEventAgentNetworkComponent();
        network.setAddress(theRequestDetails.getServletRequest().getRemoteAddr());
        network.setType(AuditEvent.AuditEventAgentNetworkType._2);
        agent.setNetwork(network);
        
        auditEvent.addAgent(agent);
        
        // Source
        AuditEvent.AuditEventSourceComponent source = new AuditEvent.AuditEventSourceComponent();
        source.setObserver(new Reference("Device/security-system"));
        auditEvent.setSource(source);
        
        // Entity (resource bị chặn truy cập)
        if (theRequestDetails.getResourceName() != null && theRequestDetails.getId() != null) {
            AuditEvent.AuditEventEntityComponent entity = new AuditEvent.AuditEventEntityComponent();
            entity.setWhat(new Reference(theRequestDetails.getResourceName() + "/" + theRequestDetails.getId()));
            auditEvent.addEntity(entity);
        }
        
        // Lưu AuditEvent
        try {
            auditEventDao.create(auditEvent, null);
        } catch (Exception e) {
            logger.error("Lỗi khi lưu AuditEvent cho truy cập bị chặn: {}", e.getMessage());
        }
    }
}
```

### Digital Signatures: Chữ ký số trong FHIR R5

Chữ ký số là một phần quan trọng của việc đảm bảo tính xác thực và toàn vẹn dữ liệu. FHIR R5 cải thiện hỗ trợ cho chữ ký số trong Provenance và các resource khác.

#### 1. Kiểu dữ liệu Signature trong FHIR R5:

```json
"signature": [
  {
    "type": [
      {
        "system": "urn:iso-astm:E1762-95:2013",
        "code": "1.2.840.10065.1.12.1.1",
        "display": "Author's Signature"
      }
    ],
    "when": "2023-03-15T14:30:22Z",
    "who": {
      "reference": "Practitioner/doctor123"
    },
    "targetFormat": "application/fhir+json",
    "sigFormat": "application/signature+xml",
    "data": "dGhpcyBibG9jayBjb250YWlucyB0aGUgYWN0dWFsIGRpZ2l0YWwgc2lnbmF0dXJl"
  }
]
```

#### 2. Triển khai tạo và xác thực chữ ký số:

```java
@Component
public class DigitalSignatureService {
    
    private final KeyPair keyPair;
    private final X509Certificate certificate;
    
    public DigitalSignatureService() throws Exception {
        // Khởi tạo cặp khóa và certificate
        // Trong thực tế, nên sử dụng HSM hoặc Key Vault
        KeyPairGenerator keyGen = KeyPairGenerator.getInstance("RSA");
        keyGen.initialize(2048);
        this.keyPair = keyGen.generateKeyPair();
        
        // Tạo self-signed certificate
        X509Certificate cert = generateSelfSignedCertificate();
        this.certificate = cert;
    }
    
    private X509Certificate generateSelfSignedCertificate() throws Exception {
        // Tạo self-signed certificate
        X500Name dnName = new X500Name("CN=FHIR Server");
        BigInteger certSerialNumber = new BigInteger(Long.toString(System.currentTimeMillis()));
        
        Calendar calendar = Calendar.getInstance();
        Date startDate = new Date();
        calendar.add(Calendar.YEAR, 1);
        Date endDate = calendar.getTime();
        
        ContentSigner contentSigner = new JcaContentSignerBuilder("SHA256WithRSA").build(keyPair.getPrivate());
        
        JcaX509v3CertificateBuilder certBuilder = new JcaX509v3CertificateBuilder(
            dnName, certSerialNumber, startDate, endDate, dnName, keyPair.getPublic());
        
        BasicConstraints basicConstraints = new BasicConstraints(true);
        certBuilder.addExtension(new ASN1ObjectIdentifier("2.5.29.19"), true, basicConstraints);
        
        return new JcaX509CertificateConverter().getCertificate(certBuilder.build(contentSigner));
    }
    
    /**
     * Tạo chữ ký số cho một resource
     */
    public Signature signResource(Resource resource, String practitionerId) throws Exception {
        // Chuyển resource sang format JSON chuẩn hóa
        String jsonResource = serializeResourceForSigning(resource);
        
        // Tạo chữ ký
        Signature signature = new Signature();
        
        // Loại chữ ký: Tác giả
        Coding signatureType = new Coding()
            .setSystem("urn:iso-astm:E1762-95:2013")
            .setCode("1.2.840.10065.1.12.1.1")
            .setDisplay("Author's Signature");
        signature.addType(signatureType);
        
        // Thời gian ký
        signature.setWhen(new Date());
        
        // Người ký
        signature.setWho(new Reference("Practitioner/" + practitionerId));
        
        // Format đích
        signature.setTargetFormat("application/fhir+json");
        
        // Format chữ ký
        signature.setSigFormat("application/signature+xml");
        
        // Dữ liệu chữ ký
        String signatureData = createDigitalSignature(jsonResource);
        signature.setData(signatureData);
        
        return signature;
    }
    
    private String serializeResourceForSigning(Resource resource) {
        // Tạo serializer
        IParser jsonParser = FhirContext.forR5().newJsonParser();
        
        // Xóa các trường không ảnh hưởng đến nội dung
        // (meta.versionId, meta.lastUpdated, etc.)
        if (resource.hasMeta()) {
            Meta meta = resource.getMeta();
            meta.setVersionId(null);
            meta.setLastUpdated(null);
            resource.setMeta(meta);
        }
        
        // Serialize resource
        return jsonParser.encodeResourceToString(resource);
    }
    
    private String createDigitalSignature(String data) throws Exception {
        // Tạo chữ ký
        Signature sig = Signature.getInstance("SHA256withRSA");
        sig.initSign(keyPair.getPrivate());
        sig.update(data.getBytes(StandardCharsets.UTF_8));
        byte[] signatureBytes = sig.sign();
        
        // Mã hóa Base64
        return Base64.getEncoder().encodeToString(signatureBytes);
    }
    
    /**
     * Xác thực chữ ký số của một resource
     */
    public boolean verifySignature(Resource resource, Signature signature) {
        try {
            // Lấy dữ liệu chữ ký
            String signatureData = signature.getData();
            byte[] signatureBytes = Base64.getDecoder().decode(signatureData);
            
            // Chuẩn hóa resource để xác thực
            String canonicalJson = serializeResourceForSigning(resource);
            
            // Xác thực chữ ký
            java.security.Signature sig = java.security.Signature.getInstance("SHA256withRSA");
            sig.initVerify(keyPair.getPublic());
            sig.update(canonicalJson.getBytes(StandardCharsets.UTF_8));
            
             return sig.verify(signatureBytes);
        } catch (Exception e) {
            logger.error("Lỗi khi xác thực chữ ký: {}", e.getMessage());
            return false;
        }
    }
    
    /**
     * Tạo Provenance có chữ ký số cho một resource
     */
    public Provenance createSignedProvenance(Resource targetResource, String practitionerId) {
        try {
            Provenance provenance = new Provenance();
            
            // Thiết lập target
            provenance.addTarget(new Reference(targetResource.getIdElement().toUnqualifiedVersionless().getValue()));
            
            // Thiết lập thời gian ghi lại
            provenance.setRecorded(new Date());
            
            // Thiết lập hoạt động (ví dụ: signature)
            Coding activityCoding = new Coding()
                .setSystem("http://terminology.hl7.org/CodeSystem/v3-DataOperation")
                .setCode("SIGN")
                .setDisplay("sign");
            provenance.setActivity(new CodeableConcept().addCoding(activityCoding));
            
            // Thiết lập agent
            Provenance.ProvenanceAgentComponent agent = new Provenance.ProvenanceAgentComponent();
            agent.setWho(new Reference("Practitioner/" + practitionerId));
            
            Coding agentTypeCoding = new Coding()
                .setSystem("http://terminology.hl7.org/CodeSystem/provenance-participant-type")
                .setCode("author")
                .setDisplay("Author");
            agent.setType(new CodeableConcept().addCoding(agentTypeCoding));
            
            provenance.addAgent(agent);
            
            // Tạo chữ ký số cho resource
            Signature signature = signResource(targetResource, practitionerId);
            
            // Thêm chữ ký vào Provenance
            provenance.addSignature(signature);
            
            return provenance;
        } catch (Exception e) {
            logger.error("Lỗi khi tạo Provenance có chữ ký: {}", e.getMessage());
            throw new RuntimeException("Không thể tạo Provenance có chữ ký", e);
        }
    }
}
```

#### 3. Interceptor để xác thực chữ ký:

```java
@Component
public class SignatureVerificationInterceptor extends InterceptorAdapter {
    
    @Autowired
    private DigitalSignatureService signatureService;
    
    @Autowired
    private IFhirResourceDao<Provenance> provenanceDao;
    
    @Override
    public boolean incomingRequestPreHandled(RequestDetails theRequestDetails, HttpServletRequest theRequest, HttpServletResponse theResponse) {
        // Chỉ áp dụng cho các resource yêu cầu xác thực chữ ký
        if (requiresSignatureVerification(theRequestDetails)) {
            try {
                // Lấy ID của resource
                String resourceType = theRequestDetails.getResourceName();
                String resourceId = theRequestDetails.getId();
                
                if (resourceId != null) {
                    // Kiểm tra chữ ký
                    boolean isValid = verifyResourceSignature(resourceType, resourceId);
                    
                    if (!isValid) {
                        // Thêm warning header
                        theResponse.addHeader("X-FHIR-Warning", "Resource signature verification failed");
                        
                        // Tùy thuộc vào chính sách, có thể từ chối truy cập
                        // throw new AuthenticationException("Resource signature verification failed");
                    }
                }
            } catch (Exception e) {
                logger.error("Lỗi khi xác thực chữ ký: {}", e.getMessage());
                // Xử lý lỗi
            }
        }
        
        return true;
    }
    
    private boolean requiresSignatureVerification(RequestDetails theRequestDetails) {
        // Xác định loại resource cần xác thực chữ ký
        String resourceType = theRequestDetails.getResourceName();
        
        return "DiagnosticReport".equals(resourceType) || 
               "Observation".equals(resourceType) || 
               "MedicationAdministration".equals(resourceType) || 
               "CarePlan".equals(resourceType);
    }
    
    private boolean verifyResourceSignature(String resourceType, String resourceId) {
        // Tìm kiếm Provenance với chữ ký cho resource này
        SearchParameterMap map = new SearchParameterMap();
        map.add("target", new ReferenceParam(resourceType + "/" + resourceId));
        
        try {
            IBundleProvider results = provenanceDao.search(map);
            List<IBaseResource> provenances = results.getResources(0, results.size());
            
            // Kiểm tra từng Provenance
            for (IBaseResource res : provenances) {
                Provenance provenance = (Provenance) res;
                
                // Nếu có chữ ký
                if (provenance.hasSignature()) {
                    // Lấy resource cần xác thực
                    IFhirResourceDao<?> resourceDao = getDao(resourceType);
                    Resource targetResource = (Resource) resourceDao.read(new IdType(resourceType, resourceId));
                    
                    // Xác thực chữ ký
                    for (Signature signature : provenance.getSignature()) {
                        boolean isValid = signatureService.verifySignature(targetResource, signature);
                        if (isValid) {
                            return true;
                        }
                    }
                }
            }
            
            // Nếu không tìm thấy chữ ký hợp lệ
            return false;
            
        } catch (Exception e) {
            logger.error("Lỗi khi tìm kiếm và xác thực chữ ký: {}", e.getMessage());
            return false;
        }
    }
    
    private IFhirResourceDao<?> getDao(String resourceType) {
        // Lấy DAO tương ứng với loại resource
        // (Triển khai thực tế sẽ phụ thuộc vào cấu trúc ứng dụng)
        return null; // Giả định
    }
}
```

#### 4. API để ký và xác thực resource:

```java
@RestController
@RequestMapping("/api/signature")
public class SignatureController {
    
    @Autowired
    private DigitalSignatureService signatureService;
    
    @Autowired
    private IFhirResourceDao<Provenance> provenanceDao;
    
    /**
     * Ký một resource
     */
    @PostMapping("/sign")
    public ResponseEntity<String> signResource(
            @RequestParam("resourceType") String resourceType,
            @RequestParam("resourceId") String resourceId,
            @RequestParam("practitionerId") String practitionerId) {
        
        try {
            // Tìm resource cần ký
            IFhirResourceDao<?> resourceDao = getDao(resourceType);
            Resource targetResource = (Resource) resourceDao.read(new IdType(resourceType, resourceId));
            
            // Tạo Provenance có chữ ký
            Provenance signedProvenance = signatureService.createSignedProvenance(targetResource, practitionerId);
            
            // Lưu Provenance
            provenanceDao.create(signedProvenance);
            
            return ResponseEntity.ok("Resource signed successfully. Provenance ID: " + signedProvenance.getId());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error signing resource: " + e.getMessage());
        }
    }
    
    /**
     * Xác thực chữ ký của một resource
     */
    @GetMapping("/verify")
    public ResponseEntity<Map<String, Object>> verifySignature(
            @RequestParam("resourceType") String resourceType,
            @RequestParam("resourceId") String resourceId) {
        
        Map<String, Object> response = new HashMap<>();
        
        try {
            // Tìm kiếm Provenance với chữ ký cho resource này
            SearchParameterMap map = new SearchParameterMap();
            map.add("target", new ReferenceParam(resourceType + "/" + resourceId));
            
            IBundleProvider results = provenanceDao.search(map);
            List<IBaseResource> provenances = results.getResources(0, results.size());
            
            // Nếu không có Provenance nào
            if (provenances.isEmpty()) {
                response.put("verified", false);
                response.put("reason", "No signature found");
                return ResponseEntity.ok(response);
            }
            
            // Lấy resource cần xác thực
            IFhirResourceDao<?> resourceDao = getDao(resourceType);
            Resource targetResource = (Resource) resourceDao.read(new IdType(resourceType, resourceId));
            
            List<Map<String, Object>> signatureResults = new ArrayList<>();
            boolean anyValid = false;
            
            // Kiểm tra từng Provenance
            for (IBaseResource res : provenances) {
                Provenance provenance = (Provenance) res;
                
                // Kiểm tra từng chữ ký
                if (provenance.hasSignature()) {
                    for (Signature signature : provenance.getSignature()) {
                        Map<String, Object> sigResult = new HashMap<>();
                        
                        // Thông tin người ký
                        if (signature.hasWho()) {
                            sigResult.put("signer", signature.getWho().getReference());
                        }
                        
                        // Thời gian ký
                        if (signature.hasWhen()) {
                            sigResult.put("signedAt", signature.getWhen());
                        }
                        
                        // Xác thực chữ ký
                        boolean isValid = signatureService.verifySignature(targetResource, signature);
                        sigResult.put("valid", isValid);
                        
                        if (isValid) {
                            anyValid = true;
                        }
                        
                        signatureResults.add(sigResult);
                    }
                }
            }
            
            response.put("verified", anyValid);
            response.put("signatures", signatureResults);
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            response.put("verified", false);
            response.put("error", e.getMessage());
            return ResponseEntity.status(500).body(response);
        }
    }
    
    private IFhirResourceDao<?> getDao(String resourceType) {
        // Lấy DAO tương ứng với loại resource
        // (Triển khai thực tế sẽ phụ thuộc vào cấu trúc ứng dụng)
        return null; // Giả định
    }
}
```

### Mô hình triển khai tích hợp

Dưới đây là một mô hình kiến trúc tích hợp cho việc triển khai Provenance, Audit và Digital Signature trong FHIR R5:

```
+----------------------------------------------------------+
|                   FHIR API Layer                         |
+------------------------+-------------------------------+--+
                         |                               |
+------------------------v------+      +----------------v---+
| Resource Access Control |      |      | Signature Service  |
|                         |      |      |                    |
| - Access Pattern Rules  |      |      | - Sign Resources   |
| - Provenance-Based Auth +<-----+----->+ - Verify Signature |
| - User Context          |      |      | - Manage Keys      |
+-------------------------+      +--------------------+---+
           |                                          |
+----------v----------+                     +---------v-------+
|  Provenance Service |                     |   Audit Service  |
|                     |                     |                  |
| - Track Data Origin <---------------------+ - Log Access     |
| - Record Changes    |                     | - Monitor Events |
| - Document Lineage  |                     | - Alert on Issues|
+---------+-----------+                     +---------+--------+
          |                                           |
+---------v-------------------------------------------v--------+
|                   Storage Layer                              |
|                                                              |
| +---------------+  +---------------+  +---------------+      |
| | FHIR Resources|  |  Provenance   |  |  AuditEvent   |      |
| | - Patient     |  | - Origin      |  | - Access Logs |      |
| | - Observation |  | - Changes     |  | - Security    |      |
| | - etc...      |  | - Signatures  |  |   Events      |      |
| +---------------+  +---------------+  +---------------+      |
+--------------------------------------------------------------+
```

### Các thực tiễn tốt nhất

Dựa trên kinh nghiệm triển khai và các bài học từ thực tế, đây là một số thực tiễn tốt nhất khi làm việc với Provenance, Audit và Digital Signatures trong FHIR R5:

#### 1. Tối ưu hóa hiệu năng:

* **Sử dụng Interceptor**: Tự động ghi Provenance và AuditEvent với các interceptor
* **Lọc thông minh**: Không ghi audit cho mọi hoạt động (ví dụ: bỏ qua metadata)
* **Xử lý bất đồng bộ**: Lưu AuditEvent trong background để không làm chậm request
* **Chiến lược cache**: Cache thông tin Provenance và chữ ký đã xác thực

Mẫu code xử lý bất đồng bộ:

```java
@Component
public class AsyncAuditService {
    
    private final BlockingQueue<AuditEvent> auditQueue = new LinkedBlockingQueue<>(1000);
    
    @Autowired
    private IFhirResourceDao<AuditEvent> auditEventDao;
    
    @PostConstruct
    public void startProcessing() {
        // Bắt đầu thread xử lý
        Thread processor = new Thread(() -> {
            while (true) {
                try {
                    // Lấy audit từ queue
                    AuditEvent audit = auditQueue.take();
                    
                    // Lưu vào cơ sở dữ liệu
                    auditEventDao.create(audit);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                    break;
                } catch (Exception e) {
                    logger.error("Lỗi khi lưu AuditEvent: {}", e.getMessage());
                }
            }
        });
        
        processor.setDaemon(true);
        processor.start();
    }
    
    public void addAuditEvent(AuditEvent audit) {
        // Thêm vào queue, không chặn nếu đầy
        try {
            if (!auditQueue.offer(audit, 100, TimeUnit.MILLISECONDS)) {
                logger.warn("Audit queue đầy, bỏ qua audit event");
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}
```

#### 2. Chiến lược lưu trữ:

* **Phân vùng theo thời gian**: Lưu trữ AuditEvent theo ngày/tháng để dễ quản lý
* **Lưu trữ phân tầng**: Chuyển audit logs cũ sang lưu trữ chi phí thấp hơn
* **Nén dữ liệu**: Nén AuditEvents để giảm dung lượng lưu trữ

#### 3. Bảo mật và tuân thủ:

* **Xác định data lineage**: Luôn ghi lại nguồn gốc dữ liệu nhạy cảm
* **Bất biến (Immutability)**: Đảm bảo AuditEvent không thể bị sửa đổi sau khi tạo
* **Chỉ lưu trữ dữ liệu cần thiết**: Không lưu thông tin nhạy cảm trong audit trừ khi cần thiết

#### 4. Xử lý chữ ký:

* **Quản lý khóa an toàn**: Sử dụng HSM hoặc Key Vault để lưu khóa
* **Chuẩn hóa dữ liệu**: Chuẩn hóa dữ liệu trước khi ký để đảm bảo tính nhất quán
* **Xác thực phía client**: Cho phép xác thực chữ ký ở client để giảm tải cho server

#### 5. Tiếp cận theo từng giai đoạn:

* **Bắt đầu đơn giản**: Triển khai audit cơ bản trước, sau đó mở rộng
* **Tăng dần độ phức tạp**: Thêm tính năng như chữ ký và theo dõi lineage khi cần
* **Đánh giá và điều chỉnh**: Thường xuyên xem xét hiệu quả và điều chỉnh cấu hình

### Kết luận

Provenance, Audit và Digital Signatures là ba khía cạnh quan trọng của bảo mật và quản lý dữ liệu trong FHIR R5. Khi kết hợp, chúng tạo thành một hệ thống mạnh mẽ để theo dõi nguồn gốc, biết được ai đã truy cập hay thay đổi dữ liệu, và đảm bảo tính xác thực của thông tin.

FHIR R5 đã cải thiện đáng kể các khả năng này, đặc biệt là:

* Cấu trúc Provenance linh hoạt hơn để theo dõi nguồn gốc dữ liệu
* AuditEvent mạnh mẽ hơn với các trường mới như severity và purposeOfEvent
* Hỗ trợ tốt hơn cho chữ ký số và xác thực

Triển khai đúng đắn các tính năng này không chỉ giúp tuân thủ các quy định như HIPAA, GDPR mà còn tăng cường niềm tin của bệnh nhân vào hệ thống y tế. Bằng cách áp dụng các mẫu thiết kế và thực tiễn được đề xuất trong bài viết này, bạn có thể xây dựng một hệ thống bảo mật và minh bạch, đáp ứng các yêu cầu nghiêm ngặt của lĩnh vực y tế.
