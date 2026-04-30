import { useState } from "react";
import { 
  ShieldCheck, CheckCircle2, AlertCircle, FileText, 
  MapPin, Landmark, Upload, ChevronRight, Check
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-hot-toast";
import { cn } from "../lib/utils";

const kycSchema = z.object({
  pan: z.string().regex(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, "Invalid PAN format"),
  gst: z.string().optional(),
  accountNumber: z.string().min(10, "Minimum 10 digits"),
  ifsc: z.string().min(11, "Must be 11 characters"),
  accountHolder: z.string().min(3, "Required"),
});

export default function KYC() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(kycSchema)
  });

  const onSubmit = (data: any) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4);
      toast.success("KYC Submitted Successfully");
    }, 2000);
  };

  const steps = [
    { n: 1, name: "Identity" },
    { n: 2, name: "Bank" },
    { n: 3, name: "Documents" },
    { n: 4, name: "Status" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight mb-8">Verification Center</h1>
        <div className="flex items-center justify-between relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 -z-10"></div>
          {steps.map((s) => (
            <div key={s.n} className="flex flex-col items-center">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all border-4 border-slate-950",
                step >= s.n ? "bg-amber-400 text-slate-950" : "bg-slate-800 text-slate-500"
              )}>
                {step > s.n ? <Check className="w-5 h-5" /> : s.n}
              </div>
              <span className={cn(
                "mt-2 text-[10px] font-black uppercase tracking-widest",
                step >= s.n ? "text-slate-200" : "text-slate-500"
              )}>{s.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-[40px] overflow-hidden">
        <div className="p-8 md:p-12">
          {step === 1 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-4 bg-amber-400/10 p-6 rounded-3xl border border-amber-400/20">
                <ShieldCheck className="w-8 h-8 text-amber-400" />
                <p className="text-sm text-amber-400/80 font-medium">
                  Financial regulations in India require valid identity verification (KYC) before any commercial investment.
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Permanent Account Number (PAN)</label>
                  <input 
                    {...register("pan")}
                    placeholder="ABCDE1234F"
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 font-bold text-slate-100 placeholder:text-slate-700 uppercase focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                  />
                  {errors.pan && <p className="text-red-400 text-xs mt-1 font-bold">{errors.pan.message as string}</p>}
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">GST Identification Number (Optional)</label>
                  <input 
                    {...register("gst")}
                    placeholder="27AAAAA0000A1Z5"
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 font-bold text-slate-100 placeholder:text-slate-700 uppercase focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                  />
                </div>
                <button 
                  onClick={() => setStep(2)}
                  className="w-full bg-slate-100 text-slate-900 py-5 rounded-2xl font-bold flex items-center justify-center gap-2"
                >
                  Save & Continue
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Account Holder Name</label>
                  <input 
                    {...register("accountHolder")}
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 font-bold text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Account Number</label>
                    <input 
                      {...register("accountNumber")}
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 font-bold text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">IFSC Code</label>
                    <input 
                      {...register("ifsc")}
                      placeholder="HDFC0001234"
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 font-bold text-slate-100 placeholder:text-slate-700 uppercase focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <button onClick={() => setStep(1)} className="flex-1 py-5 rounded-2xl font-bold text-slate-400 hover:text-slate-200">Back</button>
                  <button onClick={() => setStep(3)} className="flex-[2] bg-slate-100 text-slate-900 py-5 rounded-2xl font-bold flex items-center justify-center gap-2">Save & Continue</button>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-2 border-dashed border-slate-800 rounded-3xl p-8 flex flex-col items-center justify-center text-center group hover:border-amber-400/50 transition-all">
                  <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400 mb-4 group-hover:text-amber-400">
                    <Upload className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-slate-200 mb-1">Aadhaar Card</h4>
                  <p className="text-xs text-slate-500">Front and back (PDF/JPG)</p>
                  <input type="file" className="hidden" />
                </div>
                <div className="border-2 border-dashed border-slate-800 rounded-3xl p-8 flex flex-col items-center justify-center text-center group hover:border-amber-400/50 transition-all">
                  <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400 mb-4 group-hover:text-amber-400">
                    <Upload className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-slate-200 mb-1">Bank Statement</h4>
                  <p className="text-xs text-slate-500">Latest 6 months (PDF)</p>
                  <input type="file" className="hidden" />
                </div>
              </div>
              <div className="flex gap-4">
                <button onClick={() => setStep(2)} className="flex-1 py-5 rounded-2xl font-bold text-slate-400 hover:text-slate-200 transition-colors">Back</button>
                <button 
                  disabled={isSubmitting}
                  onClick={handleSubmit(onSubmit)}
                  className="flex-[2] bg-amber-400 text-slate-950 py-5 rounded-2xl font-black text-xl hover:bg-amber-500 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Submitting..." : "Complete KYC"}
                  {!isSubmitting && <ChevronRight className="w-6 h-6" />}
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-12 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-24 h-24 bg-emerald-400/10 rounded-full flex items-center justify-center mx-auto text-emerald-400 border border-emerald-400/20">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-3xl font-black mb-4">Verification Under Review</h3>
                <p className="text-slate-400 max-w-sm mx-auto leading-relaxed">
                  Our compliance team is verifying your documents. This typically takes <span className="text-slate-200 font-bold">24-48 hours</span>. You will receive an email once verified.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Status</p>
                  <p className="text-xs font-black text-amber-400 uppercase tracking-widest">Pending</p>
                </div>
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Queue</p>
                  <p className="text-xs font-black text-slate-100 uppercase tracking-widest">#14</p>
                </div>
              </div>
              <button 
                onClick={() => setStep(1)}
                className="text-slate-500 text-sm hover:text-slate-300 underline font-bold"
              >
                Need to update information?
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
