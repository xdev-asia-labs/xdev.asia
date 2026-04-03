/**
 * PHI (Protected Health Information) data classification
 */

export type SensitivityLevel = "PUBLIC" | "INTERNAL" | "CONFIDENTIAL" | "RESTRICTED";

export interface DataClassification {
  fieldName: string;
  level: SensitivityLevel;
  category: string;
  hipaaIdentifier: boolean;
  encryptionRequired: boolean;
  maskingRule: string;
  retentionPeriod: string;
}

/**
 * HIPAA's 18 PHI Identifiers (Safe Harbor Method)
 */
export const HIPAA_18_IDENTIFIERS = [
  { id: 1, name: "Names", examples: ["full_name", "first_name", "last_name", "patient_name"] },
  { id: 2, name: "Geographic data (smaller than state)", examples: ["address", "street", "city", "zip_code", "district"] },
  { id: 3, name: "Dates (except year)", examples: ["date_of_birth", "admission_date", "discharge_date", "death_date"] },
  { id: 4, name: "Phone numbers", examples: ["phone", "mobile", "fax", "phone_number"] },
  { id: 5, name: "Fax numbers", examples: ["fax", "fax_number"] },
  { id: 6, name: "Email addresses", examples: ["email", "email_address"] },
  { id: 7, name: "Social Security numbers", examples: ["ssn", "social_security", "national_id", "cccd", "cmnd"] },
  { id: 8, name: "Medical record numbers", examples: ["medical_record_number", "mrn", "patient_id", "ma_benh_nhan"] },
  { id: 9, name: "Health plan beneficiary numbers", examples: ["insurance_number", "health_plan_id", "so_bhyt"] },
  { id: 10, name: "Account numbers", examples: ["account_number", "billing_account"] },
  { id: 11, name: "Certificate/license numbers", examples: ["license_number", "certificate_number", "chung_chi_hanh_nghe"] },
  { id: 12, name: "Vehicle identifiers", examples: ["vehicle_id", "license_plate", "bien_so_xe"] },
  { id: 13, name: "Device identifiers", examples: ["device_serial", "implant_id", "medical_device_id"] },
  { id: 14, name: "Web URLs", examples: ["patient_portal_url", "personal_website"] },
  { id: 15, name: "IP addresses", examples: ["ip_address", "client_ip"] },
  { id: 16, name: "Biometric identifiers", examples: ["fingerprint", "face_scan", "retina_scan", "voice_print"] },
  { id: 17, name: "Full-face photos", examples: ["photo", "profile_image", "patient_photo", "anh_chan_dung"] },
  { id: 18, name: "Any other unique identifying number", examples: ["unique_id", "external_id"] },
];

/**
 * Vietnamese-specific healthcare data fields
 */
export const VN_HEALTHCARE_FIELDS: DataClassification[] = [
  { fieldName: "ho_ten", level: "RESTRICTED", category: "PHI", hipaaIdentifier: true, encryptionRequired: true, maskingRule: "Nguyễn ***", retentionPeriod: "10 years after last visit" },
  { fieldName: "cccd", level: "RESTRICTED", category: "PHI", hipaaIdentifier: true, encryptionRequired: true, maskingRule: "***456789", retentionPeriod: "10 years after last visit" },
  { fieldName: "so_bhyt", level: "RESTRICTED", category: "PHI", hipaaIdentifier: true, encryptionRequired: true, maskingRule: "DN***789", retentionPeriod: "Until plan termination + 6 years" },
  { fieldName: "ngay_sinh", level: "CONFIDENTIAL", category: "PHI", hipaaIdentifier: true, encryptionRequired: true, maskingRule: "****-**-**", retentionPeriod: "10 years" },
  { fieldName: "chan_doan", level: "RESTRICTED", category: "Clinical", hipaaIdentifier: false, encryptionRequired: true, maskingRule: "[REDACTED]", retentionPeriod: "15 years" },
  { fieldName: "ket_qua_xet_nghiem", level: "RESTRICTED", category: "Clinical", hipaaIdentifier: false, encryptionRequired: true, maskingRule: "[REDACTED]", retentionPeriod: "15 years" },
  { fieldName: "don_thuoc", level: "RESTRICTED", category: "Clinical", hipaaIdentifier: false, encryptionRequired: true, maskingRule: "[REDACTED]", retentionPeriod: "10 years" },
  { fieldName: "dia_chi", level: "CONFIDENTIAL", category: "PHI", hipaaIdentifier: true, encryptionRequired: true, maskingRule: "TP. ***", retentionPeriod: "10 years" },
  { fieldName: "so_dien_thoai", level: "CONFIDENTIAL", category: "PHI", hipaaIdentifier: true, encryptionRequired: true, maskingRule: "***-***-7890", retentionPeriod: "10 years" },
  { fieldName: "ma_benh_an", level: "CONFIDENTIAL", category: "PHI", hipaaIdentifier: true, encryptionRequired: false, maskingRule: "BA-***", retentionPeriod: "15 years" },
  { fieldName: "khoa_dieu_tri", level: "INTERNAL", category: "Administrative", hipaaIdentifier: false, encryptionRequired: false, maskingRule: "N/A", retentionPeriod: "5 years" },
  { fieldName: "ngay_nhap_vien", level: "CONFIDENTIAL", category: "PHI", hipaaIdentifier: true, encryptionRequired: true, maskingRule: "****-**-**", retentionPeriod: "15 years" },
];

/**
 * Classify a list of field names
 */
export function classifyFields(
  fieldNames: string[]
): Array<{
  field: string;
  level: SensitivityLevel;
  isPHI: boolean;
  isHIPAAIdentifier: boolean;
  recommendation: string;
}> {
  return fieldNames.map((field) => {
    const fieldLower = field.toLowerCase().replace(/[-_\s]/g, "");

    // Check against HIPAA 18 identifiers
    const hipaaMatch = HIPAA_18_IDENTIFIERS.find((identifier) =>
      identifier.examples.some((ex) => {
        const exLower = ex.replace(/[-_\s]/g, "");
        return fieldLower.includes(exLower) || exLower.includes(fieldLower);
      })
    );

    // Check against VN healthcare fields
    const vnMatch = VN_HEALTHCARE_FIELDS.find(
      (vn) => vn.fieldName.replace(/[-_\s]/g, "") === fieldLower
    );

    if (vnMatch) {
      return {
        field,
        level: vnMatch.level,
        isPHI: vnMatch.category === "PHI" || vnMatch.category === "Clinical",
        isHIPAAIdentifier: vnMatch.hipaaIdentifier,
        recommendation: vnMatch.encryptionRequired
          ? `Encrypt with AES-256-GCM. Mask: ${vnMatch.maskingRule}. Retention: ${vnMatch.retentionPeriod}`
          : `Apply RLS policy. Retention: ${vnMatch.retentionPeriod}`,
      };
    }

    if (hipaaMatch) {
      return {
        field,
        level: "RESTRICTED" as SensitivityLevel,
        isPHI: true,
        isHIPAAIdentifier: true,
        recommendation: `HIPAA Identifier #${hipaaMatch.id} (${hipaaMatch.name}). MUST encrypt at rest and in transit. Apply column-level encryption.`,
      };
    }

    // Clinical data patterns
    const clinicalPatterns = [
      "diagnosis", "chan_doan", "prescription", "don_thuoc", "lab_result",
      "ket_qua", "vital_sign", "allergy", "di_ung", "medical_history",
      "tien_su_benh", "treatment", "dieu_tri", "surgery", "phau_thuat",
    ];
    if (clinicalPatterns.some((p) => fieldLower.includes(p.replace(/[-_\s]/g, "")))) {
      return {
        field,
        level: "RESTRICTED",
        isPHI: true,
        isHIPAAIdentifier: false,
        recommendation: "Clinical data - encrypt with AES-256-GCM. Apply RLS policies by department and treating physician.",
      };
    }

    // Administrative patterns
    const adminPatterns = [
      "department", "khoa", "ward", "phong", "bed", "giuong",
      "room", "schedule", "lich",
    ];
    if (adminPatterns.some((p) => fieldLower.includes(p.replace(/[-_\s]/g, "")))) {
      return {
        field,
        level: "INTERNAL",
        isPHI: false,
        isHIPAAIdentifier: false,
        recommendation: "Administrative data - standard access control sufficient. No encryption required.",
      };
    }

    return {
      field,
      level: "PUBLIC" as SensitivityLevel,
      isPHI: false,
      isHIPAAIdentifier: false,
      recommendation: "No PHI detected. Standard security controls apply.",
    };
  });
}
