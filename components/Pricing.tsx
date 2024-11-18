import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { submitToGoogleSheets } from '../utils/googleSheets';
import { useToast } from '../hooks/use-toast';

interface FormData {
    name: string;
    email: string;
    plan: string;
}

interface PricingPlan {
    name: string;
    price: string;
    features: string[];
}

const pricingPlans: PricingPlan[] = [
    {
      name: 'Basic',
      price: 'Free',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      name: 'Pro',
      price: '$20/month',
      features: ['Feature A', 'Feature B', 'Feature C'],
    },
    {
      name: 'Enterprise',
      price: '$50/month',
      features: ['Feature X', 'Feature Y', 'Feature Z'],
    },
  ];
  

const PricingSection: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    plan: ''
  });
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const { toast } = useToast()
  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan);
    setFormData(prev => ({ ...prev, plan }));
    setDialogOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitToGoogleSheets(formData);
      
      toast({
        title: "Success!",
        description: "Your subscription request has been submitted.",
        duration: 5000,
        className: "bg-green-500 text-white",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        plan: ''
      });
      setSelectedPlan(null);
      setDialogOpen(false);
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='pricing' className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#15B392]">
          Pricing Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <Card key={plan.name} className="flex flex-col">
              <CardHeader>
                <CardTitle className='text-2xl text-[#117554]'>{plan.name}</CardTitle>
                <CardDescription>Perfect for {plan.name.toLowerCase()} users</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-4xl font-bold">{plan.price}</p>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Dialog open={dialogOpen && selectedPlan === plan.name} onOpenChange={setDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-[#54C392] hover:bg-[#117554] text-lg w-[50%] mx-auto" onClick={() => handlePlanSelect(plan.name)}>
                      Choose {plan.name}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Subscribe to {plan.name} Plan</DialogTitle>
                      <DialogDescription>
                        Enter your details to subscribe to the {plan.name} plan. We&rsquo;ll never share your information.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit}>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Name
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            className="col-span-3"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="email" className="text-right">
                            Email
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            className="col-span-3"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit" disabled={isSubmitting}>
                          {isSubmitting ? 'Submitting...' : `Subscribe to ${plan.name}`}
                        </Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;