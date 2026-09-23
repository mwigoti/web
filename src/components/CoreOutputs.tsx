import React, { useState } from 'react';
import { Layers, ShieldCheck, FileSpreadsheet, Check, Code, FileText } from 'lucide-react';
import { Badge } from '@/src/components/ui/badge';
import { Button } from '@/src/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/src/components/ui/tabs';

export const CoreOutputs: React.FC = () => {
  const [activePillar, setActivePillar] = useState<'all' | 'monitoring' | 'evidence' | 'reporting'>('all');
  const [expandedOutput, setExpandedOutput] = useState<string | null>('Digital Farm ID & Baseline');
  const [showRawCode, setShowRawCode] = useState<boolean>(false);

  const outputs = [
    // Monitoring Pillar
    {
      pillar: 'monitoring',
      name: 'Digital Farm ID & Baseline',
      format: 'GeoJSON / Spatial Polygon',
      cadence: 'Onboarding + Annual Baseline',
      purpose:
        'Immutable plot perimeter boundary with 5-year historical vegetation trajectory, elevation slope, and baseline vegetative index benchmark.',
      standard: 'EUDR plot geolocation & land tenure compliance',
      socialImpact: 'Ensures smallholder families are permanently registered in global trade directories, safeguarding them against arbitrary buyer de-listing.',
      farmerOutcome: 'Saves ~$140/farm by replacing expensive private surveying consultants with satellite polygon mapping.',
      schemaPayload: `{
  "type": "Feature",
  "geometry": {
    "type": "Polygon",
    "coordinates": [[[36.9512, -0.4281], [36.9531, -0.4275], [36.9528, -0.4294], [36.9512, -0.4281]]]
  },
  "properties": {
    "farm_id": "TF-KE-NYE-0842",
    "farmer_name": "Kariuki Estate Outgrower",
    "declared_area_ha": 3.42,
    "gps_accuracy_m": 0.8,
    "five_year_baseline_ndvi": 0.76,
    "elevation_amsl_m": 1842,
    "primary_crop": "Coffea Arabica SL28"
  }
}`,
    },
    {
      pillar: 'monitoring',
      name: 'Crop-Condition Monitoring',
      format: 'Time-Series NDVI / NDRE / EVI Index',
      cadence: '5-Day Satellite Revisit',
      purpose:
        'Continuous vegetation density and canopy vigor tracking to identify moisture stress, delayed emergence, or early crop failure before physical inspection.',
      standard: 'Crop health oversight & yield forecasting',
      socialImpact: 'Provides early warning of localized drought or soil fatigue, protecting household food security and annual coffee harvest revenues.',
      farmerOutcome: 'Alerts cooperative agronomists up to 3 weeks before visible wilting, preventing 30–35% harvest loss.',
      schemaPayload: `{
  "farm_id": "TF-KE-NYE-0842",
  "sensor": "Sentinel-2 MSI Level-2A",
  "observation_timestamp": "2026-08-28T07:42:19Z",
  "metrics": {
    "mean_ndvi": 0.54,
    "mean_ndre": 0.38,
    "mean_evi": 0.49,
    "cloud_coverage_pct": 0.8,
    "historical_expected_ndvi": 0.76,
    "deviation_pct": -28.9
  }
}`,
    },
    {
      pillar: 'monitoring',
      name: 'Sustainability & Practice Indicators',
      format: 'Canopy Density & Land Cover Metrics',
      cadence: 'Bi-Weekly Analysis',
      purpose:
        'Verifies conservation agriculture practices including shade tree canopy coverage, contour hedge retention, and soil cover preservation.',
      standard: 'Rainforest Alliance & Organic Regenerative Standards',
      socialImpact: 'Verifies traditional regenerative practices, allowing farming communities to earn higher Fairtrade and sustainability price premiums.',
      farmerOutcome: 'Proves 30%+ shade-tree canopy cover without requiring farmers to pay for intrusive third-party certifiers.',
      schemaPayload: `{
  "farm_id": "TF-KE-NYE-0842",
  "shade_tree_canopy_cover_pct": 34.2,
  "erosion_barrier_retention": "CONFIRMED_CONTOUR_TERRACES",
  "intercropping_detected": true,
  "soil_vegetative_cover_pct": 78.4,
  "compliance_status": "RAINFOREST_ALLIANCE_COMPLIANT"
}`,
    },

    // Evidence Pillar
    {
      pillar: 'evidence',
      name: 'Anomaly & Risk Alerts',
      format: 'Automated Exception Flag',
      cadence: 'Event-Triggered (Near Real-Time)',
      purpose:
        'Early-warning notifications for abrupt canopy loss, abnormal senescence, perimeter degradation, or deforestation risk in adjacent forest buffers.',
      standard: 'Risk mitigation & zero-deforestation mandates',
      socialImpact: 'Guards indigenous community forests and water catchment basins while alerting agronomists to pest outbreaks.',
      farmerOutcome: 'Immediate extension assistance dispatched to fix broken irrigation drip lines and treat leaf blight early.',
      schemaPayload: `{
  "alert_id": "ALT-2026-0842",
  "severity": "CRITICAL",
  "trigger": "CANOPY_VEGETATION_DROP_OVER_25_PCT",
  "affected_area_ha": 1.45,
  "riparian_buffer_breach": false,
  "suggested_field_action": "Targeted irrigation line check and leaf rust sampling"
}`,
    },
    {
      pillar: 'evidence',
      name: 'Targeted Verification Lists',
      format: 'Geolocated Mobile Task Queue',
      cadence: 'Dynamic Weekly Dispatch',
      purpose:
        'Ranks and queues only those specific farms showing material deviations, providing extension agents with turn-by-turn routing and verification checklists.',
      standard: 'Field efficiency optimization (eliminates blind visits)',
      socialImpact: 'Ends wasted cooperative travel budgets and ensures field extension resources reach the most vulnerable farmers first.',
      farmerOutcome: 'Eliminates uncoordinated, random inspections; extension officers arrive ready with tailored farming solutions.',
      schemaPayload: `{
  "dispatch_id": "DSP-KE-041",
  "assigned_officer_id": "EXT-JOHN-MUTUA",
  "ranked_farms_count": 6,
  "travel_route_optimized_km": 14.8,
  "benchmark_unrouted_km": 52.1,
  "estimated_time_saving_pct": 71.6
}`,
    },
    {
      pillar: 'evidence',
      name: 'Evidence Trails',
      format: 'Timestamped Geotagged Audit Dossier',
      cadence: 'Continuous Ledger',
      purpose:
        'Cryptographically timestamped record linking satellite observations, in-situ sensor logs, field agent inspection notes, and ground photos into one verifiable timeline.',
      standard: 'Third-party auditor defensibility',
      socialImpact: 'Builds an unassailable record of smallholder environmental stewardship that defends farmer cooperatives during international trade disputes.',
      farmerOutcome: 'Serves as digital credit collateral, unlocking affordable agricultural bank loans for fertilizer and farm equipment.',
      schemaPayload: `{
  "evidence_id": "EVD-842-2026",
  "audit_chain": [
    { "type": "SATELLITE_ANOMALY_TRIGGER", "utc": "2026-08-25T07:42:00Z" },
    { "type": "IOT_SOIL_STRESS_CONFIRMED", "utc": "2026-08-25T08:15:00Z" },
    { "type": "OFFICER_DISPATCHED", "utc": "2026-08-26T06:00:00Z" },
    { "type": "GROUND_CORRECTION_LOGGED", "utc": "2026-08-26T11:30:00Z", "photo_hash": "sha256:d8a9..." }
  ],
  "immutable_seal": "VERIFIED_VALID"
}`,
    },

    // Reporting Pillar
    {
      pillar: 'reporting',
      name: 'Compliance & Traceability Records',
      format: 'Structured Batch Export (CSV / JSON)',
      cadence: 'Per Harvest / Per Shipment',
      purpose:
        'Plot-to-batch traceability records validating that harvested agricultural produce originates from zero-deforestation, pesticide-compliant registered parcels.',
      standard: 'GLOBALG.A.P. & EU Pesticide MRL Documentation',
      socialImpact: 'Ensures full harvest lots are cleared through customs without costly border detentions or quarantine rejections.',
      farmerOutcome: 'Farmers get paid promptly on harvest delivery because buyers face zero compliance uncertainty.',
      schemaPayload: `{
  "batch_lot_number": "LOT-2026-COF-019",
  "total_weight_kg": 18400,
  "contributing_parcels": ["TF-KE-NYE-0842", "TF-KE-NYE-0843", "TF-KE-NYE-0847"],
  "all_parcels_eudr_cleared": true,
  "eudr_reference_id": "DDS-EU-2026-992014-KE"
}`,
    },
    {
      pillar: 'reporting',
      name: 'Digital MRV Reports',
      format: 'Auditable PDF & Verification Ledger',
      cadence: 'Monthly / Quarterly / Season Close',
      purpose:
        'Comprehensive, audit-ready MRV packages detailing monitored hectarage, verified interventions, and compliance status for international certifiers and lenders.',
      standard: 'Financial ESG reporting & regulatory inspection',
      socialImpact: 'Gives impact investors and development finance institutions (DFIs) verified proof of rural economic resilience and carbon additionality.',
      farmerOutcome: 'Connects smallholder societies to premium climate finance grants and carbon offset co-benefits.',
      schemaPayload: `{
  "dossier_title": "Season 2026 Q3 Digital MRV Audit Summary",
  "portfolio_name": "Nyeri Central Coffee Cooperative Union",
  "monitored_parcels": 1240,
  "verified_compliance_rate_pct": 99.4,
  "total_corrective_interventions": 18,
  "auditor_signature": "TERRASAT_MRV_ACCREDITED"
}`,
    },
    {
      pillar: 'reporting',
      name: 'Portfolio Dashboards / API-Ready Data',
      format: 'RESTful API & Interactive Web GIS',
      cadence: 'Real-Time Sync',
      purpose:
        'Full-portfolio visibility for aggregators, insurers, and banks with direct integration into existing enterprise ERP, GIS, or core banking systems.',
      standard: 'Enterprise interoperability & loan underwriting',
      socialImpact: 'Democratizes geospatial intelligence across African agriculture, linking grassroots cooperatives with national and international supply chains.',
      farmerOutcome: 'Eliminates paperwork friction, ensuring fair prices and transparent accounting from farmgate to final export container.',
      schemaPayload: `{
  "api_endpoint": "https://api.terrafarm.io/v2/portfolio/query",
  "auth": "Bearer tf_live_token",
  "supported_formats": ["GeoJSON", "GeoPackage", "Protobuf", "CSV", "JSON-LD"],
  "erp_connectors": ["SAP Agribusiness", "John Deere Operations Center", "Custom Webhooks"]
}`,
    },
  ];

  const filteredOutputs = activePillar === 'all'
    ? outputs
    : outputs.filter((item) => item.pillar === activePillar);

  return (
    <section id="core-outputs" className="py-24 bg-[#FFFFFF] text-[#16211F] border-b border-[#E3E7DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#475B55] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#1D3130]" />
            <span>Product Specifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D3130] leading-tight mb-4">
            Core Outputs &amp; Deliverables
          </h2>
          <p className="text-base sm:text-lg text-[#475B55] leading-relaxed">
            TerraFarm delivers structured, audit-ready datasets rather than decorative dashboards.
            Each output is engineered for direct submission to regulatory authorities, buyers, and certification auditors.
          </p>
        </div>

        {/* Filter Tabs using shadcn Tabs */}
        <div className="mb-8 border-b border-[#E3E7DF] pb-4">
          <Tabs
            value={activePillar}
            onValueChange={(val) => setActivePillar(val as 'all' | 'monitoring' | 'evidence' | 'reporting')}
            className="w-full"
          >
            <TabsList className="bg-[#F0F2EB] border-[#E3E7DF] p-1 flex-wrap h-auto">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-[#1D3130] data-[state=active]:text-[#CFF4A7] text-[#475B55]"
              >
                All Deliverables ({outputs.length})
              </TabsTrigger>
              <TabsTrigger
                value="monitoring"
                className="data-[state=active]:bg-[#1D3130] data-[state=active]:text-[#CFF4A7] text-[#475B55] flex items-center gap-1.5"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>1. Monitoring &amp; Baselines</span>
              </TabsTrigger>
              <TabsTrigger
                value="evidence"
                className="data-[state=active]:bg-[#1D3130] data-[state=active]:text-[#CFF4A7] text-[#475B55] flex items-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>2. Risk Detection &amp; Evidence</span>
              </TabsTrigger>
              <TabsTrigger
                value="reporting"
                className="data-[state=active]:bg-[#1D3130] data-[state=active]:text-[#CFF4A7] text-[#475B55] flex items-center gap-1.5"
              >
                <FileSpreadsheet className="w-3.5 h-3.5" />
                <span>3. Compliance &amp; Reporting</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Structured Specification Data Table (No Generic Icon Grids) */}
        <div className="border-2 border-[#CBD5E1] rounded-2xl overflow-hidden bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F7F8F3] border-b border-[#E3E7DF] text-xs font-semibold text-[#1D3130] uppercase tracking-wider">
                  <th className="py-4 px-6 font-headline">Deliverable Name</th>
                  <th className="py-4 px-6 font-headline hidden md:table-cell">Format &amp; Schema</th>
                  <th className="py-4 px-6 font-headline hidden sm:table-cell">Update Cadence</th>
                  <th className="py-4 px-6 font-headline">Operational Purpose &amp; Target Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0F2EB] text-sm">
                {filteredOutputs.map((item) => {
                  const isExpanded = expandedOutput === item.name;
                  return (
                    <React.Fragment key={item.name}>
                      <tr
                        onClick={() => setExpandedOutput(isExpanded ? null : item.name)}
                        className={`transition-colors cursor-pointer ${
                          isExpanded ? 'bg-[#F7F8F3]' : 'hover:bg-[#F7F8F3]/60'
                        }`}
                      >
                        {/* Deliverable Name & Pillar Tag */}
                        <td className="py-4 px-6 align-top">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-[#1D3130]">
                              {item.name}
                            </span>
                            <Badge variant="outline" className="text-[10px] bg-white border-[#E3E7DF] text-[#475B55] px-2 py-0">
                              {isExpanded ? 'Hide Schema' : 'Inspect'}
                            </Badge>
                          </div>
                          <span className="inline-block mt-1 text-[11px] font-mono text-[#475B55] uppercase">
                            {item.pillar}
                          </span>
                          {/* Mobile view formats */}
                          <div className="sm:hidden mt-2 text-xs text-[#475B55]">
                            <span className="font-mono text-[#1D3130]">{item.cadence}</span> · {item.format}
                          </div>
                        </td>

                        {/* Format */}
                        <td className="py-4 px-6 align-top hidden md:table-cell font-mono text-xs text-[#16211F]/80">
                          {item.format}
                        </td>

                        {/* Cadence */}
                        <td className="py-4 px-6 align-top hidden sm:table-cell font-mono text-xs text-[#16211F]/80">
                          {item.cadence}
                        </td>

                        {/* Purpose & Compliance Standard */}
                        <td className="py-4 px-6 align-top">
                          <p className="text-xs sm:text-sm text-[#16211F]/90 leading-relaxed font-normal mb-2">
                            {item.purpose}
                          </p>
                          <Badge variant="verified" className="text-[11px] font-medium inline-flex items-center gap-1.5 py-0.5 px-2.5">
                            <Check className="w-3 h-3 text-[#4C8B5C]" />
                            <span>{item.standard}</span>
                          </Badge>
                        </td>
                      </tr>

                      {/* Expanded Impact & Specification Drawer */}
                      {isExpanded && (
                        <tr className="bg-[#152522] text-white">
                          <td colSpan={4} className="p-4 sm:p-6 border-t border-b border-[#2B4543]">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                              <div>
                                <span className="text-xs font-mono text-[#CFF4A7] font-semibold uppercase tracking-wider">
                                  Deliverable Impact &amp; Assurance Dossier
                                </span>
                                <h4 className="text-sm font-semibold text-white mt-0.5 font-headline">
                                  {item.name} · {item.format}
                                </h4>
                              </div>
                              <div className="flex items-center gap-3">
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="sm"
                                  onClick={() => setShowRawCode(!showRawCode)}
                                  className="h-7 text-xs font-mono gap-1.5 border-[#2B4543] bg-[#122220] hover:bg-[#1D3130] text-[#D6E3DE] hover:text-[#CFF4A7]"
                                >
                                  {showRawCode ? (
                                    <>
                                      <FileText className="w-3.5 h-3.5" />
                                      <span>Show Impact Overview</span>
                                    </>
                                  ) : (
                                    <>
                                      <Code className="w-3.5 h-3.5" />
                                      <span>View Raw JSON Payload</span>
                                    </>
                                  )}
                                </Button>
                                <Badge variant="default" className="text-xs font-mono py-1 px-2.5">
                                  {item.standard}
                                </Badge>
                              </div>
                            </div>

                            {showRawCode ? (
                              <pre className="bg-[#0E1B19] p-4 rounded text-xs font-mono text-[#A7F3D0] overflow-x-auto leading-relaxed border border-[#2B4543]">
                                <code>{item.schemaPayload}</code>
                              </pre>
                            ) : (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
                                <div className="bg-[#1D3130] p-4 rounded border border-[#2B4543]">
                                  <div className="text-[11px] font-mono uppercase text-[#CFF4A7] mb-1.5 font-semibold">
                                    Smallholder &amp; Social Impact
                                  </div>
                                  <p className="text-[#E7EFE5]/90 leading-relaxed">
                                    {item.socialImpact}
                                  </p>
                                </div>
                                <div className="bg-[#1D3130] p-4 rounded border border-[#2B4543]">
                                  <div className="text-[11px] font-mono uppercase text-[#CFF4A7] mb-1.5 font-semibold">
                                    Farmer Economics &amp; Protection
                                  </div>
                                  <p className="text-[#E7EFE5]/90 leading-relaxed">
                                    {item.farmerOutcome}
                                  </p>
                                </div>
                              </div>
                            )}
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Integration note */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#475B55] bg-[#F7F8F3] p-4 rounded-sm border border-[#E3E7DF]">
          <div>
            <span className="font-semibold text-[#1D3130]">API &amp; ERP Compatibility:</span> All core outputs support automated ingestion via RESTful endpoints, webhook event subscriptions, and standard GeoJSON/CSV exports.
          </div>
          <div className="font-mono text-[11px] text-[#1D3130] shrink-0">
            Compliant with EUDR Geolocation Schema
          </div>
        </div>
      </div>
    </section>
  );
};
