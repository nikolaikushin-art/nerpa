 import { useState } from 'react';
 import { useLanguage } from '@/minerals-portal/contexts/LanguageContext';
 import { Button } from '@/minerals-portal/components/ui/button';
 import { Input } from '@/minerals-portal/components/ui/input';
 import { Textarea } from '@/minerals-portal/components/ui/textarea';
 import { Label } from '@/minerals-portal/components/ui/label';
 import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
 } from '@/minerals-portal/components/ui/select';
 import { useToast } from '@/minerals-portal/hooks/use-toast';
  import { Send, CheckCircle, Loader2 } from 'lucide-react';
 
 const ContactForm = () => {
   const { t, isRTL } = useLanguage();
   const { toast } = useToast();
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [isSuccess, setIsSuccess] = useState(false);
   const [formData, setFormData] = useState({
     name: '',
     email: '',
     organization: '',
     sector: '',
     message: '',
   });
 
   const sectors = [
     { value: 'copper', label: t.sectors.copper },
     { value: 'lithium', label: t.sectors.lithium },
     { value: 'gold', label: t.sectors.gold },
     { value: 'gemstones', label: t.sectors.gemstones },
     { value: 'iron', label: t.sectors.iron },
     { value: 'rareEarth', label: t.sectors.rareEarth },
     { value: 'chromite', label: t.sectors.chromite },
     { value: 'marble', label: t.sectors.marble },
     { value: 'coal', label: t.sectors.coal },
   ];
 
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setIsSubmitting(true);
 
     try {
       // Independent submission: opens the visitor's mail client with the inquiry pre-filled.
      const subject = encodeURIComponent(`Website inquiry - ${formData.sector || 'General'} - ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization}\nSector: ${formData.sector}\n\n${formData.message}`
      );
      window.location.href = `mailto:info@nerpa.org.af?subject=${subject}&body=${body}`;
 
      setIsSuccess(true);
      toast({
        title: t.contact.successTitle,
        description: t.contact.success,
      });
       setFormData({
         name: '',
         email: '',
         organization: '',
         sector: '',
         message: '',
       });
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      toast({
        title: t.contact.errorTitle,
        description: t.contact.error,
        variant: 'destructive',
      });
     } finally {
       setIsSubmitting(false);
     }
   };
 
   if (isSuccess) {
     return (
       <div className="flex flex-col items-center justify-center py-16 text-center">
         <CheckCircle className="h-16 w-16 text-primary mb-6" />
        <h3 className="font-display text-2xl font-light text-foreground mb-4">
          {t.contact.success}
        </h3>
        <Button onClick={() => setIsSuccess(false)} variant="outline">
          {t.contact.submitAnother}
        </Button>
       </div>
     );
   }
 
   return (
     <form onSubmit={handleSubmit} className={`space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
       <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
         <div className="space-y-2">
           <Label htmlFor="name">{t.contact.name}</Label>
           <Input
             id="name"
             value={formData.name}
             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
             placeholder={t.contact.namePlaceholder}
             required
             className="bg-background/50"
           />
         </div>
         <div className="space-y-2">
           <Label htmlFor="email">{t.contact.email}</Label>
           <Input
             id="email"
             type="email"
             value={formData.email}
             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
             placeholder={t.contact.emailPlaceholder}
             required
             className="bg-background/50"
           />
         </div>
       </div>
 
       <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
         <div className="space-y-2">
           <Label htmlFor="organization">{t.contact.organization}</Label>
           <Input
             id="organization"
             value={formData.organization}
             onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
             placeholder={t.contact.organizationPlaceholder}
             className="bg-background/50"
           />
         </div>
         <div className="space-y-2">
           <Label htmlFor="sector">{t.contact.sector}</Label>
           <Select
             value={formData.sector}
             onValueChange={(value) => setFormData({ ...formData, sector: value })}
           >
             <SelectTrigger className="bg-background/50">
               <SelectValue placeholder={t.contact.selectSector} />
             </SelectTrigger>
             <SelectContent>
               {sectors.map((sector) => (
                 <SelectItem key={sector.value} value={sector.value}>
                   {sector.label}
                 </SelectItem>
               ))}
             </SelectContent>
           </Select>
         </div>
       </div>
 
       <div className="space-y-2">
         <Label htmlFor="message">{t.contact.message}</Label>
         <Textarea
           id="message"
           value={formData.message}
           onChange={(e) => setFormData({ ...formData, message: e.target.value })}
           placeholder={t.contact.messagePlaceholder}
           required
           rows={5}
           className="bg-background/50"
         />
       </div>
 
       <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
         {isSubmitting ? (
           <>
             <Loader2 className="mr-2 h-4 w-4 animate-spin" />
             {t.contact.submitting}
           </>
         ) : (
           <>
             <Send className="mr-2 h-4 w-4" />
             {t.contact.submit}
           </>
         )}
       </Button>
     </form>
   );
 };
 
 export default ContactForm;