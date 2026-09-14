import React, { useState } from 'react';
import { CheckCircle, Send, Shield } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/src/components/ui/dialog';
import { Button } from '@/src/components/ui/button';
import { Badge } from '@/src/components/ui/badge';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    solution: 'Terra Farm (Agricultural MRV & EUDR)',
    role: 'Exporter / Aggregator',
    location: '',
    priority: 'Compliance & Risk Intelligence',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-xl bg-[#1D3130] border-[#2B4543] p-6 sm:p-8 text-white">
        {submitted ? (
          <div className="py-6 text-center">
            <div className="w-14 h-14 rounded-full bg-[#CFF4A7]/20 border border-[#CFF4A7] flex items-center justify-center mx-auto mb-4 text-[#CFF4A7]">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-2 font-headline">
              Walkthrough Scheduled
            </h3>
            <p className="text-sm text-[#D6E3DE] max-w-md mx-auto leading-relaxed mb-6">
              Thank you, <span className="text-white font-semibold">{formData.name}</span>. The TerraSat Impact team (Nairobi) will contact you at{' '}
              <span className="text-[#CFF4A7] font-mono font-semibold">{formData.email}</span> regarding your inquiry for <span className="text-white font-medium">{formData.solution}</span>.
            </p>
            <Button
              type="button"
              variant="default"
              size="lg"
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-8 shadow-md"
            >
              Done
            </Button>
          </div>
        ) : (
          <div>
            <DialogHeader className="text-left mb-4 space-y-2">
              <div className="flex items-center">
                <Badge variant="default" className="text-xs font-mono uppercase tracking-wider py-1 px-3">
                  <Shield className="w-3.5 h-3.5 mr-1" />
                  TerraSat Impact · Technical Walkthrough
                </Badge>
              </div>
              <DialogTitle className="text-2xl sm:text-3xl font-extrabold text-white font-headline">
                Request a Demo or Partnership
              </DialogTitle>
              <DialogDescription className="text-sm text-[#D6E3DE]">
                Connect with our geospatial, agronomy, and early-warning team in Nairobi.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Product Selector */}
              <div>
                <label htmlFor="modal-solution" className="block text-xs font-mono uppercase text-[#D6E3DE] mb-1.5 font-medium">
                  Select Product of Interest <span className="text-[#CFF4A7]">*</span>
                </label>
                <select
                  id="modal-solution"
                  value={formData.solution}
                  onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#152522] border border-[#2B4543] rounded-xl text-white focus:outline-none focus:border-[#CFF4A7] focus:ring-1 focus:ring-[#CFF4A7]"
                >
                  <option value="Terra Farm (Agricultural MRV & EUDR)">Terra Farm · Agricultural MRV &amp; EUDR Compliance</option>
                  <option value="NEWIS (Flood Early Warning & Routing)">NEWIS · Flood Early Warning &amp; Safe-Space Routing</option>
                  <option value="TerraSat Enterprise Platform (Both)">TerraSat Enterprise Platform (Both Solutions)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-mono uppercase text-[#D6E3DE] mb-1.5 font-medium">
                    Your Name <span className="text-[#CFF4A7]">*</span>
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Grace Wanjiku"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#152522] border border-[#2B4543] rounded-xl text-white placeholder-[#A4B8B2] focus:outline-none focus:border-[#CFF4A7] focus:ring-1 focus:ring-[#CFF4A7]"
                  />
                </div>
                <div>
                  <label htmlFor="modal-company" className="block text-xs font-mono uppercase text-[#D6E3DE] mb-1.5 font-medium">
                    Organization <span className="text-[#CFF4A7]">*</span>
                  </label>
                  <input
                    id="modal-company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Rift Valley Agribusiness Ltd"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#152522] border border-[#2B4543] rounded-xl text-white placeholder-[#A4B8B2] focus:outline-none focus:border-[#CFF4A7] focus:ring-1 focus:ring-[#CFF4A7]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-mono uppercase text-[#D6E3DE] mb-1.5 font-medium">
                    Work Email <span className="text-[#CFF4A7]">*</span>
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="g.wanjiku@riftagri.com"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#152522] border border-[#2B4543] rounded-xl text-white placeholder-[#A4B8B2] focus:outline-none focus:border-[#CFF4A7] focus:ring-1 focus:ring-[#CFF4A7]"
                  />
                </div>
                <div>
                  <label htmlFor="modal-role" className="block text-xs font-mono uppercase text-[#D6E3DE] mb-1.5 font-medium">
                    Organization Type
                  </label>
                  <select
                    id="modal-role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#152522] border border-[#2B4543] rounded-xl text-white focus:outline-none focus:border-[#CFF4A7] focus:ring-1 focus:ring-[#CFF4A7]"
                  >
                    <option value="Exporter / Aggregator">Exporter / Aggregator</option>
                    <option value="Cooperative Union">Cooperative Union</option>
                    <option value="Commercial Farm">Commercial Farm</option>
                    <option value="Public Sector / Municipality">Public Sector / Municipality</option>
                    <option value="NGO / Humanitarian Agency">NGO / Humanitarian Agency</option>
                    <option value="Insurer / Bank">Insurer / Bank / SACCO</option>
                    <option value="Certification Body">Certification Body</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-location" className="block text-xs font-mono uppercase text-[#D6E3DE] mb-1.5 font-medium">
                    Location / Target Ward or Acreage
                  </label>
                  <input
                    id="modal-location"
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Nyeri / Mathare / 2,500 ha"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#152522] border border-[#2B4543] rounded-xl text-white placeholder-[#A4B8B2] focus:outline-none focus:border-[#CFF4A7] focus:ring-1 focus:ring-[#CFF4A7]"
                  />
                </div>
                <div>
                  <label htmlFor="modal-priority" className="block text-xs font-mono uppercase text-[#D6E3DE] mb-1.5 font-medium">
                    Primary Mandate
                  </label>
                  <select
                    id="modal-priority"
                    value={formData.priority}
                    onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#152522] border border-[#2B4543] rounded-xl text-white focus:outline-none focus:border-[#CFF4A7] focus:ring-1 focus:ring-[#CFF4A7]"
                  >
                    <option value="EUDR Deforestation Compliance">EUDR Deforestation Compliance</option>
                    <option value="Flood Early Warning Deployment">Flood Early Warning Deployment</option>
                    <option value="GLOBALGAP Evidence">GLOBALG.A.P. &amp; MRL Verification</option>
                    <option value="Inspection Cost Reduction">Field Inspection Cost Reduction</option>
                    <option value="Credit / Insurance Risk">Ag-Loan / Insurance Verification</option>
                    <option value="Institutional Research & Partnership">Institutional Research &amp; Partnership</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  className="w-full flex items-center justify-center gap-2 rounded-xl text-sm"
                >
                  <span>Confirm Walkthrough Request</span>
                  <Send className="w-4 h-4" />
                </Button>
              </div>

              <p className="text-xs text-[#A4B8B2] text-center mt-3">
                TerraSat Impact Co. Ltd. · Nairobi, Kenya · No spam, guaranteed.
              </p>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
