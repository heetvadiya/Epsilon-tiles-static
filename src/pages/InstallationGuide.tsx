import React from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle, AlertTriangle, PenTool as Tool } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';
import PDFDownloadButton from '../components/PDFDownloadButton';

const InstallationGuide: React.FC = () => {
  const tools = [
    'Carpenter square', 'Utility knife', 'Tape measure', 'Pencil', 
    'Long straight edge', 'Chalk line', 'Safety glasses', 'Tapping block', 'Pull bar'
  ];

  const requirements = [
    'Sub-floor must be flat, clean and dry',
    'Maximum area: 10m x 10m (32.8 feet)',
    'Interior use only in climate-controlled environment',
    'Acclimate planks 48 hours at 60°-85°F',
    'Relative humidity between 30%-55%'
  ];

  const steps = [
    {
      number: 1,
      title: 'Start at Left Corner',
      description: 'Place the 1st plank with the tongue facing wall. Use spacers to set a 12mm (15/32") gap between wall and flooring.',
      image: 'https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      number: 2,
      title: 'Install Second Plank',
      description: 'Install the 2nd plank by clicking the tongue into the groove; hold the plank from 30° angle and lower. Make sure both planks are perfectly aligned.',
      image: 'https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      number: 3,
      title: 'Complete First Row',
      description: 'At the end of the 1st row, measure the last plank to leave 15/32" space to the wall.',
      image: 'https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      number: 4,
      title: 'Begin Second Row',
      description: 'Begin the 2nd row with the leftover piece from the 1st row. The cut piece must be at least 30cm (12") long.',
      image: 'https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      number: 5,
      title: 'Lock the Joints',
      description: 'Click the short side and place it tight to the short end of the left plank. Angle the long side (about 30°) and tap it firmly into the 1st row.',
      image: 'https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    },
    {
      number: 6,
      title: 'Finish Installation',
      description: 'Remove spacers and sweep the floor with soft brush. Cover the expansion gaps by driving baseboards into the wall (NOT into the floor).',
      image: 'https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Installation Guide" 
        subtitle="Complete step-by-step instructions for installing FLORA SPC flooring"
        backgroundImage="https://images.pexels.com/photos/8945931/pexels-photo-8945931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="section container">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" direction="scale">
          <h2 className="mb-4">Rigid Core Installation Instructions</h2>
          <p className="text-muted-foreground">
            Our vinyl floorings are constructed with the patented Uniclic® tongue and groove design that locks the planks together to form a tight and durable joint that limits moisture from passing through the seams, can be installed over most floor surfaces, and suitable for both residential and light commercial interior applications.
          </p>
        </AnimatedSection>

        {/* Requirements */}
        <AnimatedSection direction="up" className="mb-12">
          <div className="card p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="text-primary mr-3" size={24} />
              <h3 className="text-xl font-semibold">Requirements & Site Conditions</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {requirements.map((requirement, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-sm">{requirement}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Tools Required */}
        <AnimatedSection direction="up" className="mb-12">
          <div className="card p-6">
            <div className="flex items-center mb-4">
              <Tool className="text-primary mr-3" size={24} />
              <h3 className="text-xl font-semibold">Tools Required</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {tools.map((tool, index) => (
                <motion.div 
                  key={index}
                  className="bg-muted/50 rounded-lg p-3 text-center text-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Installation Steps */}
        <AnimatedSection direction="up" className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Installation Steps</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <motion.div 
                key={step.number}
                className="card overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {step.number}
                    </div>
                    <h4 className="font-semibold">{step.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Subfloor Information */}
        <AnimatedSection direction="up" className="mb-12">
          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">Subfloor Requirements</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Concrete Subfloors:</h4>
                <p className="text-sm text-muted-foreground">
                  Make sure moisture vapor emissions does not exceed 5 lbs./24 hour per 1,000 sq. when tested with the Anhydrous Calcium Chloride Test in accordance with ASTM F 1869 or 85% RH in accordance with ASTM F 2170. Level uneven areas greater than 3/16" in a 10 feet. Newly poured concrete floors must cure for a minimum of 90 days.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Wood Subfloors:</h4>
                <p className="text-sm text-muted-foreground">
                  Must be solid and flat. Sand down high spots and fill low spots with leveling compound. Firmly fasten all loose boards and fill all gaps before installation.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Radiant Heat Subfloors:</h4>
                <p className="text-sm text-muted-foreground">
                  Rigid Core Planks can be installed over in-floor radiant heating systems provided the subfloor surface does not exceed 85°F (29.44°C) at any point. The initial floor temperature should not exceed 70°F (21.11°C) for 48 hours prior, during, and after installation.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* After Care */}
        <AnimatedSection direction="up" className="mb-12">
          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">After Care</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">Maintenance:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Maintain room temperature between 60° - 85° F</li>
                  <li>• Keep relative humidity between 40% and 70%</li>
                  <li>• Sweep and/or dust mop the floor daily</li>
                  <li>• Use diluted Simple Green for regular cleaning</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Protection:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Protect against direct sunlight</li>
                  <li>• Use felt pads under furniture legs</li>
                  <li>• Avoid harsh abrasive cleaners</li>
                  <li>• Use suitable floor mats at entrances</li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Download Section */}
        <AnimatedSection className="text-center" direction="scale">
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold mb-4">Download Complete Installation Guide</h3>
            <p className="text-muted-foreground mb-6">
              Get the complete installation manual with detailed diagrams, troubleshooting tips, and warranty information.
            </p>
            <PDFDownloadButton
              pdfUrl="/pdfs/installation-guide.pdf"
              label="Download PDF Guide"
            />
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default InstallationGuide;