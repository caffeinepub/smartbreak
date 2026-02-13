import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import SectionShell from '../SectionShell';
import AnimatedInView from '../AnimatedInView';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useCreateContactSubmission } from '../../../hooks/useQueries';
import { CTAType } from '../../../backend';
import { toast } from 'sonner';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    message: '',
  });

  const createSubmission = useCreateContactSubmission();

  const handleSubmit = async (ctaType: CTAType) => {
    if (!formData.name || !formData.organization || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    try {
      await createSubmission.mutateAsync({
        ...formData,
        cta: ctaType,
      });

      toast.success(
        ctaType === CTAType.partnerWithUs
          ? 'Thank you! We will contact you about partnership opportunities.'
          : 'Thank you! We will reach out to discuss pilot deployment.'
      );

      setFormData({ name: '', organization: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to submit. Please try again.');
    }
  };

  return (
    <SectionShell id="contact">
      <AnimatedInView>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 text-foreground">
          Get in Touch
        </h2>
        <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Ready to deploy SmartBreak? Let's discuss how we can protect your community.
        </p>
      </AnimatedInView>

      <AnimatedInView delay={0.2}>
        <div className="max-w-2xl mx-auto">
          <div className="bg-card/50 border border-border/50 rounded-xl p-6 sm:p-8 lg:p-10 shadow-xl">
            <div className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground">
                  Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-2 bg-background/50 border-border/50 focus:border-electric"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="organization" className="text-foreground">
                  Organization *
                </Label>
                <Input
                  id="organization"
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="mt-2 bg-background/50 border-border/50 focus:border-electric"
                  placeholder="Your organization or company"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-2 bg-background/50 border-border/50 focus:border-electric"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-2 bg-background/50 border-border/50 focus:border-electric min-h-32"
                  placeholder="Tell us about your requirements..."
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="flex-1 bg-electric text-deep-blue hover:bg-electric/90 font-semibold shadow-glow-electric"
                  onClick={() => handleSubmit(CTAType.partnerWithUs)}
                  disabled={createSubmission.isPending}
                >
                  {createSubmission.isPending ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="mr-2 w-5 h-5" />
                      Partner With Us
                    </>
                  )}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 border-electric text-electric hover:bg-electric/10 font-semibold"
                  onClick={() => handleSubmit(CTAType.requestPilotDeployment)}
                  disabled={createSubmission.isPending}
                >
                  {createSubmission.isPending ? (
                    'Sending...'
                  ) : (
                    <>
                      <CheckCircle2 className="mr-2 w-5 h-5" />
                      Request Pilot Deployment
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </AnimatedInView>
    </SectionShell>
  );
}
