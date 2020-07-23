const columns = [
  {
    id: "isOrgNotSupported",
    Header: "isOrgNotSupported",
    accessor: (d) => d.isOrgNotSupported.toString(), // String-based value accessors!
  },
  {
    Header: "organization_id",
    accessor: "organization_id", // String-based value accessors!
  },
  {
    Header: "name",
    accessor: "name", // String-based value accessors!
  },
  {
    Header: "contact_name",
    accessor: "contact_name", // String-based value accessors!
  },
  {
    Header: "email",
    accessor: "email", // String-based value accessors!
  },
  {
    Header: "source",
    accessor: "source", // String-based value accessors!
  },
  {
    Header: "country",
    accessor: "country", // String-based value accessors!
  },
  {
    Header: "country_code",
    accessor: "country_code", // String-based value accessors!
  },
  {
    id: "org_settings",
    Header: "org_settings",
    accessor: (d) => d.org_settings.toString(), // String-based value accessors!
  },
  {
    id: "is_ziedition",
    Header: "is_ziedition",
    accessor: (d) => d.is_ziedition.toString(), // String-based value accessors!
  },
  {
    Header: "custom_field_type",
    accessor: "custom_field_type", // String-based value accessors!
  },
  {
    id: "is_sku_enabled",
    Header: "is_sku_enabled",
    accessor: (d) => d.is_sku_enabled.toString(), // String-based value accessors!
  },
  {
    Header: "phone",
    accessor: "phone", // String-based value accessors!
  },
  {
    Header: "state_code",
    accessor: "state_code", // String-based value accessors!
  },
  {
    Header: "zoho_one_org",
    accessor: "zoho_one_org", // String-based value accessors!
  },
  {
    Header: "zi_zb_edition",
    accessor: "zi_zb_edition", // String-based value accessors!
  },
  {
    Header: "org_created_app_source",
    accessor: "org_created_app_source", // String-based value accessors!
  },
  {
    Header: "zi_zb_client",
    accessor: "zi_zb_client", // String-based value accessors!
  },
  {
    Header: "partners_domain",
    accessor: "partners_domain", // String-based value accessors!
  },
  {
    Header: "version",
    accessor: "version", // String-based value accessors!
  },
  {
    Header: "version_formatted",
    accessor: "version_formatted", // String-based value accessors!
  },
  {
    id: "is_search360_enabled",
    Header: "is_search360_enabled",
    accessor: (d) => d.is_search360_enabled.toString(), // String-based value accessors!
  },
  {
    id: "is_sales_inclusive_tax_enabled",
    Header: "is_sales_inclusive_tax_enabled",
    accessor: (d) => d.is_sales_inclusive_tax_enabled.toString(), // String-based value accessors!
  },
  {
    Header: "sales_tax_type",
    accessor: "sales_tax_type", // String-based value accessors!
  },
  {
    id: "tax_group_enabled",
    Header: "tax_group_enabled",
    accessor: (d) => d.tax_group_enabled.toString(), // String-based value accessors!
  },
  {
    Header: "language_code",
    accessor: "language_code", // String-based value accessors!
  },
  {
    Header: "fiscal_year_start_month",
    accessor: "fiscal_year_start_month", // String-based value accessors!
  },
  {
    Header: "time_zone",
    accessor: "time_zone", // String-based value accessors!
  },
  {
    Header: "field_separator",
    accessor: "field_separator", // String-based value accessors!
  },
  {
    Header: "time_zone_formatted",
    accessor: "time_zone_formatted", // String-based value accessors!
  },
  {
    id: "can_change_timezone",
    Header: "can_change_timezone",
    accessor: (d) => d.can_change_timezone.toString(), // String-based value accessors!
  },
  {
    Header: "digital_signature_mode",
    accessor: "digital_signature_mode", // String-based value accessors!
  },
  {
    id: "is_dsign_required",
    Header: "is_dsign_required",
    accessor: (d) => d.is_dsign_required.toString(), // String-based value accessors!
  },
  {
    id: "can_sign_invoice",
    Header: "can_sign_invoice",
    accessor: (d) => d.can_sign_invoice.toString(), // String-based value accessors!
  },
  {
    id: "is_user_dsign_mandatory",
    Header: "is_user_dsign_mandatory",
    accessor: (d) => d.is_user_dsign_mandatory.toString(), // String-based value accessors!
  },
  {
    Header: "currency_id",
    accessor: "currency_id", // String-based value accessors!
  },
  {
    Header: "currency_code",
    accessor: "currency_code", // String-based value accessors!
  },
  {
    Header: "currency_symbol",
    accessor: "currency_symbol", // String-based value accessors!
  },
  {
    Header: "currency_format",
    accessor: "currency_format", // String-based value accessors!
  },
  {
    Header: "price_precision",
    accessor: "price_precision", // String-based value accessors!
  },
  {
    Header: "org_joined_app_list",
    accessor: "org_joined_app_list", // String-based value accessors!
  },
  {
    id: "is_designated_zone",
    Header: "is_designated_zone",
    accessor: (d) => d.is_designated_zone.toString(), // String-based value accessors!
  },
  {
    id: "is_registered_for_composite_scheme",
    Header: "is_registered_for_composite_scheme",
    accessor: (d) => d.is_registered_for_composite_scheme.toString(), // String-based value accessors!
  },
  {
    id: "is_sales_reverse_charge_enabled",
    Header: "is_sales_reverse_charge_enabled",
    accessor: (d) => d.is_sales_reverse_charge_enabled.toString(), // String-based value accessors!
  },
  {
    id: "is_export_with_payment_enabled",
    Header: "is_export_with_payment_enabled",
    accessor: (d) => d.is_export_with_payment_enabled.toString(), // String-based value accessors!
  },
  {
    id: "is_registered_for_tax",
    Header: "is_registered_for_tax",
    accessor: (d) => d.is_registered_for_tax.toString(), // String-based value accessors!
  },
  {
    id: "is_gst_india_version",
    Header: "is_gst_india_version",
    accessor: (d) => d.is_gst_india_version.toString(), // String-based value accessors!
  },
  {
    id: "is_registered_for_gst",
    Header: "is_registered_for_gst",
    accessor: (d) => d.is_registered_for_gst.toString(), // String-based value accessors!
  },
  {
    id: "isOrgActive",
    Header: "isOrgActive",
    accessor: (d) => d.isOrgActive.toString(), // String-based value accessors!
  },
  {
    Header: "plan_type",
    accessor: "plan_type", // String-based value accessors!
  },
  {
    Header: "plan_name",
    accessor: "plan_name", // String-based value accessors!
  },
  {
    Header: "plan_period",
    accessor: "plan_period", // String-based value accessors!
  },
  {
    Header: "account_created_date",
    accessor: "account_created_date", // String-based value accessors!
  },
  {
    Header: "account_created_date_formatted",
    accessor: "account_created_date_formatted", // String-based value accessors!
  },
  {
    id: "is_org_active",
    Header: "is_org_active",
    accessor: (d) => d.is_org_active.toString(), // String-based value accessors!
  },
  {
    id: "is_quick_setup_completed",
    Header: "is_quick_setup_completed",
    accessor: (d) => d.is_quick_setup_completed.toString(), // String-based value accessors!
  },
  {
    id: "is_trial_period_extended",
    Header: "is_trial_period_extended",
    accessor: (d) => d.is_trial_period_extended.toString(), // String-based value accessors!
  },
  {
    id: "is_trial_expired",
    Header: "is_trial_expired",
    accessor: (d) => d.is_trial_expired.toString(), // String-based value accessors!
  },
  {
    id: "is_invoice_pmt_tds_allowed", // String-based value accessors!
    Header: "is_invoice_pmt_tds_allowed",
    accessor: (d) => d.is_invoice_pmt_tds_allowed.toString(), // String-based value accessors!
  },
  {
    id: "is_hsn_or_sac_enabled",
    Header: "is_hsn_or_sac_enabled",
    accessor: (d) => d.is_hsn_or_sac_enabled.toString(), // String-based value accessors!
  },
  {
    Header: "mode",
    accessor: "mode", // String-based value accessors!
  },
  {
    id: "can_show_document_tab",
    Header: "can_show_document_tab",
    accessor: (d) => d.can_show_document_tab.toString(), // String-based value accessors!
  },
  {
    id: "is_scan_preference_enabled",
    Header: "is_scan_preference_enabled",
    accessor: (d) => d.is_scan_preference_enabled.toString(), // String-based value accessors!
  },
  {
    id: "is_user_accountant",
    Header: "is_user_accountant",
    accessor: (d) => d.is_user_accountant.toString(), // String-based value accessors!
  },
  {
    Header: "org_action",
    accessor: "org_action", // String-based value accessors!
  },
  {
    Header: "AppList",
    accessor: "AppList", // String-based value accessors!
  },
  {
    id: "is_default_org",
    Header: "is_default_org",
    accessor: (d) => d.is_default_org.toString(), // String-based value accessors!
  },
];

export default columns;
