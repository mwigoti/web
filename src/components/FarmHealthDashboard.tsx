import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Wifi,
  WifiOff,
  RefreshCw,
  Download,
  Terminal,
  Maximize2,
  Minus,
  X,
  Layers,
  Satellite,
  Radio,
  FileCheck,
  Search,
  Filter,
  ExternalLink,
  Laptop,
} from 'lucide-react';

interface FarmerComplianceRecord {
  id: string;
  farmerName: string;
  cooperative: string;
  location: string;
  crop: string;
  acreage: string;
  complianceStatus: 'verified' | 'pending-review' | 'action-required';
  complianceScore: number;
  satelliteCheck: 'Clear' | 'Borderline' | 'Flagged';
  groundSensors: 'Active (2 nodes)' | 'Active (1 node)' | 'Syncing';
  fieldRecords: 'Complete & Signed' | 'Missing Harvest Log' | 'Under Review';
  lastSurveyDate: string;
  dossierId: string;
  details: {
    boundaryVerification: string;
    forestCutoffCheck: string;
    groundEvidence: string;
    coopOfficer: string;
    dossierStatus: string;
  };
}

const initialRecords: FarmerComplianceRecord[] = [
  {
    id: 'rec-001',
    farmerName: 'Mary Wanjiku Kamau',
    cooperative: 'Tetu Coffee Farmers Co-op',
    location: 'Nyeri County, Kenya',
    crop: 'Arabica Coffee (SL28)',
    acreage: '2.4 acres',
    complianceStatus: 'verified',
    complianceScore: 98,
    satelliteCheck: 'Clear',
    groundSensors: 'Active (2 nodes)',
    fieldRecords: 'Complete & Signed',
    lastSurveyDate: 'Yesterday, 14:30',
    dossierId: 'EUDR-KE-2026-8941',
    details: {
      boundaryVerification: 'Sub-meter parcel boundary confirmed by satellite',
      forestCutoffCheck: 'Zero tree-cover loss since December 2020 cutoff date',
      groundEvidence: 'Soil moisture sensor confirms continuous organic cultivation',
      coopOfficer: 'James Mwangi (Field Lead)',
      dossierStatus: 'Dossier ready for export inspection',
    },
  },
  {
    id: 'rec-002',
    farmerName: 'Peter Kiprono Chebet',
    cooperative: 'Kapchepet Tea Producers Society',
    location: 'Kericho Central, Kenya',
    crop: 'Green & Purple Tea',
    acreage: '3.8 acres',
    complianceStatus: 'verified',
    complianceScore: 92,
    satelliteCheck: 'Clear',
    groundSensors: 'Active (1 node)',
    fieldRecords: 'Complete & Signed',
    lastSurveyDate: '3 days ago',
    dossierId: 'EUDR-KE-2026-6120',
    details: {
      boundaryVerification: 'Polygon boundary cross-referenced with local land registry',
      forestCutoffCheck: 'Canopy intact; certified non-deforestation baseline',
      groundEvidence: 'Field weather sensor logs continuous rain & microclimate',
      coopOfficer: 'Esther Korir (Agricultural Extension)',
      dossierStatus: 'Approved for EU shipment clearance',
    },
  },
  {
    id: 'rec-003',
    farmerName: 'Grace Muthoni Njeri',
    cooperative: 'Embu Smallholder Macadamia Growers',
    location: 'Embu East, Kenya',
    crop: 'Organic Macadamia',
    acreage: '1.9 acres',
    complianceStatus: 'pending-review',
    complianceScore: 78,
    satelliteCheck: 'Clear',
    groundSensors: 'Syncing',
    fieldRecords: 'Under Review',
    lastSurveyDate: 'This morning, 08:15',
    dossierId: 'EUDR-KE-2026-3409',
    details: {
      boundaryVerification: 'Satellite boundary mapping completed without parcel overlap',
      forestCutoffCheck: 'Zero deforestation detected across parcel envelope',
      groundEvidence: 'Awaiting seasonal harvest volume log from field extension worker',
      coopOfficer: 'David Mutua (Quality Auditor)',
      dossierStatus: 'Pending final officer sign-off',
    },
  },
];

export const FarmHealthDashboard: React.FC = () => {
  const [records, setRecords] = useState<FarmerComplianceRecord[]>(initialRecords);
  const [expandedId, setExpandedId] = useState<string | null>('rec-001');
  const [filter, setFilter] = useState<'all' | 'verified' | 'pending-review'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isOfflineMode, setIsOfflineMode] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);

  const handleApproveRecord = (recordId: string) => {
    setRecords((prev) =>
      prev.map((r) => {
        if (r.id === recordId) {
          return {
            ...r,
            complianceStatus: 'verified',
            complianceScore: 96,
            fieldRecords: 'Complete & Signed',
            details: {
              ...r.details,
              dossierStatus: 'Export dossier approved & locked',
            },
          };
        }
        return r;
      })
    );
    setToastMessage('✓ Farmer dossier verified & approved for export');
    setTimeout(() => setToastMessage(null), 3200);
  };

  const handleSyncData = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setToastMessage('✓ Satellite imagery & ground sensors synchronized');
      setTimeout(() => setToastMessage(null), 3000);
    }, 850);
  };

  const filteredRecords = records.filter((r) => {
    const matchesFilter = filter === 'all' || r.complianceStatus === filter;
    const matchesSearch =
      searchQuery.trim() === '' ||
      r.farmerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.cooperative.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.dossierId.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusBadge = (status: 'verified' | 'pending-review' | 'action-required') => {
    switch (status) {
      case 'verified':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#EAF5EC] text-[#1A532E] border border-[#BCDDC3]">
            <CheckCircle2 className="w-3 h-3 text-[#1A532E]" />
            Export Compliant
          </span>
        );
      case 'pending-review':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] animate-pulse" />
            In Verification
          </span>
        );
      case 'action-required':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#FEE2E2] text-[#991B1B] border border-[#FECACA]">
            <AlertTriangle className="w-3 h-3 text-[#DC2626]" />
            Action Required
          </span>
        );
    }
  };

  return (
    <section
      id="compliance-dashboard"
      aria-label="Smallholder Compliance & Verification Ledger Platform"
      className="py-16 sm:py-24 bg-[#F2F5EF] text-[#11201D] border-b border-[#D8DFD5] relative overflow-hidden"
    >
      {/* Toast Feedback */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-20 right-4 sm:right-8 z-50 bg-[#11201D] text-white border border-[#2B4543] px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2.5 text-xs font-mono"
          >
            <CheckCircle2 className="w-4 h-4 text-[#CFF4A7]" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D8DFD5] text-xs font-mono font-semibold text-[#1A532E] uppercase tracking-wider mb-3 shadow-2xs">
            <Laptop className="w-3.5 h-3.5 text-[#1A532E]" />
            <span>Terra Farm · Live Operator Console</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#11201D]">
            Smallholder MRV &amp; Export Compliance Platform
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#475B55] font-normal">
            Automated verification workspace synthesizing satellite imagery, ground IoT nodes, and cooperative farmer records into European export-ready dossiers.
          </p>
        </div>

        {/* ─── COMPUTER-LIKE PLATFORM FRAME (WORKSTATION ENCLOSURE) ─── */}
        <div className="rounded-2xl sm:rounded-3xl border border-[#CBD5E1] bg-[#0F1D1A] shadow-[0_25px_60px_-15px_rgba(17,32,29,0.35),0_0_0_1px_rgba(255,255,255,0.08)] overflow-hidden transition-all">
          
          {/* OS Title Bar / Window Controls */}
          <div className="px-4 py-3 bg-[#162724] border-b border-[#253D39] flex items-center justify-between gap-4 select-none">
            {/* Traffic Light Window Buttons */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#EF4444]/90 border border-[#DC2626] shadow-xs flex items-center justify-center group cursor-pointer">
                <X className="w-2 h-2 text-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="w-3 h-3 rounded-full bg-[#F59E0B]/90 border border-[#D97706] shadow-xs flex items-center justify-center group cursor-pointer">
                <Minus className="w-2 h-2 text-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="w-3 h-3 rounded-full bg-[#10B981]/90 border border-[#059669] shadow-xs flex items-center justify-center group cursor-pointer">
                <Maximize2 className="w-1.5 h-1.5 text-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="hidden sm:inline-block ml-3 font-mono text-[11px] text-[#8FA59E]">
                terrafarm.terrasat.space / app / compliance-ledger
              </span>
            </div>

            {/* Platform System Bar in Title Bar */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#0F1E1B] border border-[#233A36] text-[11px] font-mono text-[#CFF4A7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
                <span className="hidden xs:inline">EUDR NODE 01:</span> READY
              </div>
              <button
                type="button"
                onClick={() => setIsOfflineMode(!isOfflineMode)}
                className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#1B2F2C] hover:bg-[#233D39] border border-[#2A4541] text-[11px] font-mono text-[#D6E3DE] transition-colors cursor-pointer"
              >
                {isOfflineMode ? (
                  <>
                    <WifiOff className="w-3 h-3 text-[#F59E0B]" />
                    <span className="text-[#F59E0B]">Offline Cache</span>
                  </>
                ) : (
                  <>
                    <Wifi className="w-3 h-3 text-[#4ADE80]" />
                    <span>Live Mesh</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Platform Sub-Header (Workbench Toolbar) */}
          <div className="px-4 sm:px-6 py-3 bg-[#132320] border-b border-[#253D39] flex flex-wrap items-center justify-between gap-3 text-xs">
            {/* Left: Quick search within ledger */}
            <div className="relative flex-1 min-w-[200px] max-w-md">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#7E968F]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by farmer, co-op, or dossier ID..."
                className="w-full bg-[#0D1917] border border-[#27403C] rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-[#5E766F] focus:outline-none focus:border-[#CFF4A7] font-mono transition-colors"
              />
            </div>

            {/* Middle: Tab filters */}
            <div className="flex items-center gap-1.5">
              {[
                { id: 'all', label: 'All Parcels', count: records.length },
                { id: 'verified', label: 'Compliant', count: records.filter((r) => r.complianceStatus === 'verified').length },
                { id: 'pending-review', label: 'In Review', count: records.filter((r) => r.complianceStatus === 'pending-review').length },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id as any)}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                    filter === tab.id
                      ? 'bg-[#CFF4A7] text-[#11201D] font-bold shadow-xs'
                      : 'bg-[#182C29] text-[#A4B8B2] hover:bg-[#203834] border border-[#27403C]'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className="text-[10px] opacity-80">({tab.count})</span>
                </button>
              ))}
            </div>

            {/* Right: Sync Action */}
            <button
              type="button"
              onClick={handleSyncData}
              disabled={isSyncing}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1B332F] hover:bg-[#22403B] border border-[#2B4A45] text-white font-mono text-xs cursor-pointer transition-all disabled:opacity-50"
            >
              <RefreshCw className={`w-3 h-3 text-[#CFF4A7] ${isSyncing ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Sync Satellite &amp; IoT</span>
            </button>
          </div>

          {/* Platform Main Workspace (Light Content Bed for Pristine Legibility with Fixed Scrollable Container) */}
          <div className="p-4 sm:p-6 bg-[#F8FAF6] max-h-[580px] sm:max-h-[620px] overflow-y-auto overscroll-contain scrollbar-thin scrollbar-thumb-[#CBD5E1] scrollbar-track-transparent">
            {/* The 3 Evidence Streams Status Ribbon (Sticky or Top Context) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
              <div className="p-3 bg-white rounded-xl border border-[#D8DFD5] flex items-center gap-3 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-[#EAF5EC] border border-[#BCDDC3] flex items-center justify-center text-[#1A532E] shrink-0">
                  <Satellite className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#11201D] block">1. Satellite Imagery</span>
                  <span className="text-[11px] text-[#556963]">Dec 2020 forest cutoff baseline verified</span>
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-[#D8DFD5] flex items-center gap-3 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-[#EAF5EC] border border-[#BCDDC3] flex items-center justify-center text-[#1A532E] shrink-0">
                  <Radio className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#11201D] block">2. Ground IoT Nodes</span>
                  <span className="text-[11px] text-[#556963]">Real-time soil &amp; weather telemetry</span>
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-[#D8DFD5] flex items-center gap-3 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-[#EAF5EC] border border-[#BCDDC3] flex items-center justify-center text-[#1A532E] shrink-0">
                  <FileCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#11201D] block">3. Field Records</span>
                  <span className="text-[11px] text-[#556963]">Signed cooperative logs &amp; farmer IDs</span>
                </div>
              </div>
            </div>

            {/* Empty Search State */}
            {filteredRecords.length === 0 && (
              <div className="p-12 text-center bg-white rounded-xl border border-dashed border-[#BCDDC3] my-4">
                <FileCheck className="w-10 h-10 text-[#1A532E] mx-auto mb-2 opacity-60" />
                <h4 className="text-sm font-bold text-[#11201D] mb-1">No matching compliance records</h4>
                <p className="text-xs text-[#556963] mb-3">Try adjusting your search query or filter criteria.</p>
                <button
                  type="button"
                  onClick={() => {
                    setFilter('all');
                    setSearchQuery('');
                  }}
                  className="text-xs font-semibold text-[#1A532E] underline cursor-pointer"
                >
                  Reset all filters
                </button>
              </div>
            )}

            {/* Interactive Records List */}
            <div className="space-y-4">
              {filteredRecords.map((record) => {
                const isExpanded = expandedId === record.id;

                return (
                  <div
                    key={record.id}
                    className="bg-white rounded-2xl border-2 border-[#CBD5E1] hover:border-[#1A532E]/60 transition-all duration-200 shadow-sm hover:shadow-md overflow-hidden"
                  >
                    {/* Record Row / Header */}
                    <div className="p-4 sm:p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      {/* Farmer Identity */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          {getStatusBadge(record.complianceStatus)}
                          <span className="font-mono text-xs font-semibold text-[#556963]">{record.dossierId}</span>
                          <span className="text-xs text-[#7E968F]">· {record.acreage}</span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-[#11201D]">
                          {record.farmerName}
                        </h3>
                        <p className="text-xs font-medium text-[#1A532E]">
                          {record.crop} · {record.cooperative}
                        </p>
                      </div>

                      {/* 3 Pillars Summary Chips */}
                      <div className="grid grid-cols-3 gap-2 sm:gap-4 bg-[#F2F5EF] p-2.5 sm:p-3 rounded-xl border border-[#D8DFD5] text-center sm:text-left">
                        <div>
                          <span className="block text-[9px] font-mono uppercase text-[#697D76]">Satellite</span>
                          <span className="text-xs font-bold text-[#1A532E]">
                            {record.satelliteCheck}
                          </span>
                          <span className="hidden sm:block text-[10px] text-[#697D76]">0% canopy loss</span>
                        </div>

                        <div>
                          <span className="block text-[9px] font-mono uppercase text-[#697D76]">IoT Sensors</span>
                          <span className="text-xs font-bold text-[#11201D]">
                            {record.groundSensors.split(' ')[0]}
                          </span>
                          <span className="hidden sm:block text-[10px] text-[#697D76]">Telemetry live</span>
                        </div>

                        <div>
                          <span className="block text-[9px] font-mono uppercase text-[#697D76]">Field Log</span>
                          <span className="text-xs font-bold text-[#11201D] truncate block">
                            {record.fieldRecords.split(' ')[0]}
                          </span>
                          <span className="hidden sm:block text-[10px] text-[#697D76] truncate">Co-op signed</span>
                        </div>
                      </div>

                      {/* Row Action Buttons */}
                      <div className="flex items-center gap-2 self-end lg:self-center">
                        {record.complianceStatus !== 'verified' && (
                          <button
                            type="button"
                            onClick={() => handleApproveRecord(record.id)}
                            className="px-3.5 py-2 rounded-xl bg-[#EAF5EC] hover:bg-[#D8EBD9] text-[#1A532E] text-xs font-semibold border border-[#BCDDC3] transition-colors cursor-pointer shadow-xs"
                          >
                            Approve
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={() => setExpandedId(isExpanded ? null : record.id)}
                          aria-expanded={isExpanded}
                          className="px-3.5 py-2 rounded-xl bg-[#F2F5EF] hover:bg-[#E8ECE4] text-[#11201D] border border-[#CBD5E1] transition-colors cursor-pointer flex items-center gap-1 text-xs font-semibold"
                        >
                          <span>{isExpanded ? 'Hide' : 'Inspect'}</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>

                    {/* Expandable Platform Evidence Drawer */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: 'easeInOut' }}
                          className="border-t border-[#E8ECE4] bg-[#F7F9F5] px-4 py-4 sm:px-5 sm:py-5"
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                            <div className="p-3 bg-white rounded-lg border border-[#E8ECE4]">
                              <span className="text-[10px] font-mono uppercase text-[#697D76] block mb-1">
                                Satellite Verification
                              </span>
                              <span className="text-xs font-semibold text-[#11201D] block mb-0.5">
                                {record.details.boundaryVerification}
                              </span>
                              <span className="text-[11px] text-[#1A532E] font-medium">
                                {record.details.forestCutoffCheck}
                              </span>
                            </div>

                            <div className="p-3 bg-white rounded-lg border border-[#E8ECE4]">
                              <span className="text-[10px] font-mono uppercase text-[#697D76] block mb-1">
                                Ground IoT Telemetry
                              </span>
                              <span className="text-xs font-semibold text-[#11201D] block mb-0.5">
                                {record.details.groundEvidence}
                              </span>
                              <span className="text-[11px] text-[#556963]">Soil &amp; microclimate continuous log</span>
                            </div>

                            <div className="p-3 bg-white rounded-lg border border-[#E8ECE4]">
                              <span className="text-[10px] font-mono uppercase text-[#697D76] block mb-1">
                                Extension Verification
                              </span>
                              <span className="text-xs font-semibold text-[#11201D] block mb-0.5">
                                {record.details.coopOfficer}
                              </span>
                              <span className="text-[11px] text-[#556963]">Survey recorded {record.lastSurveyDate}</span>
                            </div>

                            <div className="p-3 bg-white rounded-lg border border-[#E8ECE4]">
                              <span className="text-[10px] font-mono uppercase text-[#697D76] block mb-1">
                                Dossier Audit Status
                              </span>
                              <span className="text-xs font-semibold text-[#1A532E] block mb-0.5">
                                {record.details.dossierStatus}
                              </span>
                              <span className="text-[11px] text-[#556963]">EU Customs clearance ready</span>
                            </div>
                          </div>

                          {/* Quick Export Action Bar */}
                          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#E8ECE4]">
                            <div className="text-xs text-[#556963]">
                              Includes verified GPS vertices, cooperative membership cert, and satellite forest cutoff proof.
                            </div>

                            <button
                              type="button"
                              onClick={() => {
                                setToastMessage(`✓ Export dossier generated for ${record.farmerName}`);
                                setTimeout(() => setToastMessage(null), 3000);
                              }}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#11201D] hover:bg-[#1A342F] text-[#CFF4A7] text-xs font-mono font-medium transition-colors cursor-pointer shadow-xs"
                            >
                              <Download className="w-3.5 h-3.5 text-[#CFF4A7]" />
                              <span>Download Dossier ({record.dossierId}.pdf)</span>
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Platform Status Footer / Terminal Bar */}
          <div className="px-4 py-2.5 bg-[#132320] border-t border-[#253D39] flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-[#8FA59E]">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[#CFF4A7]" />
              <span>TerraSat Engine v2.4 · 1,420 Smallholders Monitored · 0 Non-Compliance Flags</span>
            </div>
            <div className="flex items-center gap-4 text-[#8FA59E]">
              <span>Sentinel-2 L2A Stream: OK</span>
              <span>IoT Gateway: 100% Up</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmHealthDashboard;
