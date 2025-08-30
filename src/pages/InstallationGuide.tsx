import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, Wrench } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';
import PDFDownloadButton from '../components/PDFDownloadButton';

const InstallationGuide: React.FC = () => {
  const tools = [
    'Carpenter Square',
    'Utility Knife',
    'Tape Measure',
    'Long Straight Edge',
    'Chalk Line',
    'Safety Glasses',
    'Tapping Block',
    'Pull Bar'
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

        {/* Tools Required - New Modern Grid */}
        <AnimatedSection direction="up" className="mb-12">
          <div className="card p-6">
            <div className="flex items-center mb-6">
              <Wrench className="text-primary mr-3" size={24} />
              <h3 className="text-xl font-semibold">Tools Required</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <motion.div 
                  key={index}
                  className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg overflow-hidden shadow-md border border-border/30 hover:from-primary/10 hover:to-primary/5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="p-5 flex items-center justify-center min-h-[100px] relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/40 rounded-r-full"></div>
                    <div className="pl-3 text-center">
                      <h4 className="font-semibold text-foreground text-base leading-snug">{tool}</h4>
                    </div>
                  </div>
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
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-3">Subfloor Requirements</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proper subfloor preparation is crucial for a successful installation. Follow these guidelines for different subfloor types.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Concrete Subfloors */}
            <motion.div 
              className="card p-6 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-center mb-4">
                <h4 className="text-xl font-semibold">Concrete Subfloors</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span>Moisture vapor emissions ≤ 5 lbs./24 hour per 1,000 sq. ft.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span>Test with ASTM F 1869 or 85% RH per ASTM F 2170</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span>Level uneven areas greater than 3/16" in 10 feet</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span>Newly poured concrete must cure minimum 90 days</span>
                </div>
              </div>
            </motion.div>

            {/* Wood Subfloors */}
            <motion.div 
              className="card p-6 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-center mb-4">
                <h4 className="text-xl font-semibold">Wood Subfloors</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span>Must be solid and flat</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span>Sand down high spots</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span>Fill low spots with leveling compound</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span>Firmly fasten all loose boards and fill gaps</span>
                </div>
              </div>
            </motion.div>

            {/* Radiant Heat Subfloors */}
            <motion.div 
              className="card p-6 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-center mb-4">
                <h4 className="text-xl font-semibold">Radiant Heat Subfloors</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span>Subfloor surface ≤ 85°F (29.44°C) maximum</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span>Initial floor temperature ≤ 70°F (21.11°C)</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  <span>Maintain temperature 48 hours before, during, and after installation</span>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* After Care */}
        <AnimatedSection direction="up" className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-3">After Care</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proper maintenance and protection will ensure your FLORA flooring looks beautiful for years to come.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Maintenance Card */}
            <motion.div 
              className="card p-8 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="text-muted-foreground" size={32} />
                </div>
                <h4 className="text-2xl font-semibold mb-2">Maintenance</h4>
                <p className="text-muted-foreground">Daily and regular care guidelines</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                  <CheckCircle className="text-muted-foreground mt-0.5 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-medium">Temperature Control</p>
                    <p className="text-sm text-muted-foreground">Maintain room temperature between 60° - 85° F</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                  <CheckCircle className="text-muted-foreground mt-0.5 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-medium">Humidity Control</p>
                    <p className="text-sm text-muted-foreground">Keep relative humidity between 40% and 70%</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                  <CheckCircle className="text-muted-foreground mt-0.5 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-medium">Daily Cleaning</p>
                    <p className="text-sm text-muted-foreground">Sweep and/or dust mop the floor daily</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                  <CheckCircle className="text-muted-foreground mt-0.5 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-medium">Deep Cleaning</p>
                    <p className="text-sm text-muted-foreground">Use diluted Simple Green for regular cleaning</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Protection Card */}
            <motion.div 
              className="card p-8 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="text-muted-foreground" size={32} />
                </div>
                <h4 className="text-2xl font-semibold mb-2">Protection</h4>
                <p className="text-muted-foreground">Preventive measures and care tips</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                  <CheckCircle className="text-muted-foreground mt-0.5 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-medium">UV Protection</p>
                    <p className="text-sm text-muted-foreground">Protect against direct sunlight</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                  <CheckCircle className="text-muted-foreground mt-0.5 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-medium">Furniture Protection</p>
                    <p className="text-sm text-muted-foreground">Use felt pads under furniture legs</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                  <CheckCircle className="text-muted-foreground mt-0.5 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-medium">Cleaning Products</p>
                    <p className="text-sm text-muted-foreground">Avoid harsh abrasive cleaners</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                  <CheckCircle className="text-muted-foreground mt-0.5 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-medium">Entry Protection</p>
                    <p className="text-sm text-muted-foreground">Use suitable floor mats at entrances</p>
                  </div>
                </div>
              </div>
            </motion.div>
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