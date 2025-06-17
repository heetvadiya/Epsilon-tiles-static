import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, Download } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';

const Packing: React.FC = () => {
  const packingData = [
    {
      size: '181 × 1220 mm',
      thickness: '4+1.5 mm',
      pcsPerBox: 8,
      sqmPerBox: 1.77,
      boxesPerPallet: 65,
      sqmPerPallet: 115.05,
      palletsPerContainer: 20,
      totalBoxes: 1300,
      totalSqm: 2301,
      weightPerPallet: '1,150 kg',
      weightPerContainer: '23,000 kg'
    },
    {
      size: '230 × 1220 mm',
      thickness: '5+1.5 mm',
      pcsPerBox: 6,
      sqmPerBox: 1.68,
      boxesPerPallet: 60,
      sqmPerPallet: 100.8,
      palletsPerContainer: 20,
      totalBoxes: 1200,
      totalSqm: 2016,
      weightPerPallet: '1,260 kg',
      weightPerContainer: '25,200 kg'
    },
    {
      size: '230 × 1524 mm',
      thickness: '6+1.5 mm',
      pcsPerBox: 6,
      sqmPerBox: 2.10,
      boxesPerPallet: 48,
      sqmPerPallet: 100.8,
      palletsPerContainer: 20,
      totalBoxes: 960,
      totalSqm: 2016,
      weightPerPallet: '1,400 kg',
      weightPerContainer: '28,000 kg'
    }
  ];

  const features = [
    {
      icon: Package,
      title: 'Optimized Packaging',
      description: 'Efficient packaging design maximizes container utilization while ensuring product protection.'
    },
    {
      icon: Truck,
      title: 'Global Shipping',
      description: 'Worldwide delivery with optimized logistics for timely and cost-effective transportation.'
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Packing Details" 
        subtitle="Comprehensive packaging information for efficient logistics and planning"
        backgroundImage="https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="section container">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" direction="scale">
          <h2 className="mb-4">Packaging Specifications</h2>
          <p className="text-muted-foreground">
            Detailed packing information for all FLORA SPC flooring variants to help with project planning and logistics.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <AnimatedSection 
              key={feature.title}
              direction={index % 2 === 0 ? 'slideInLeft' : 'slideInRight'}
              delay={index * 0.2}
            >
              <div className="card p-6 text-center">
                <div className="feature-icon mx-auto">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection direction="up">
          <div className="overflow-x-auto">
            <table className="w-full card">
              <thead>
                <tr className="bg-primary/10">
                  <th className="text-left py-4 px-4 font-semibold">Size (mm)</th>
                  <th className="text-left py-4 px-4 font-semibold">Thickness (mm)</th>
                  <th className="text-center py-4 px-4 font-semibold">PCS/Box</th>
                  <th className="text-center py-4 px-4 font-semibold">SQM/Box</th>
                  <th className="text-center py-4 px-4 font-semibold">Boxes/Pallet</th>
                  <th className="text-center py-4 px-4 font-semibold">SQM/Pallet</th>
                  <th className="text-center py-4 px-4 font-semibold">Pallets/Container</th>
                  <th className="text-center py-4 px-4 font-semibold">Total Boxes</th>
                  <th className="text-center py-4 px-4 font-semibold">Total SQM</th>
                  <th className="text-center py-4 px-4 font-semibold">Weight/Pallet</th>
                  <th className="text-center py-4 px-4 font-semibold">Weight/Container</th>
                </tr>
              </thead>
              <tbody>
                {packingData.map((row, index) => (
                  <motion.tr 
                    key={index}
                    className="border-b border-border hover:bg-muted/50 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <td className="py-4 px-4 font-medium">{row.size}</td>
                    <td className="py-4 px-4">{row.thickness}</td>
                    <td className="py-4 px-4 text-center">{row.pcsPerBox}</td>
                    <td className="py-4 px-4 text-center">{row.sqmPerBox}</td>
                    <td className="py-4 px-4 text-center">{row.boxesPerPallet}</td>
                    <td className="py-4 px-4 text-center">{row.sqmPerPallet}</td>
                    <td className="py-4 px-4 text-center">{row.palletsPerContainer}</td>
                    <td className="py-4 px-4 text-center font-medium text-primary">{row.totalBoxes}</td>
                    <td className="py-4 px-4 text-center font-medium text-primary">{row.totalSqm}</td>
                    <td className="py-4 px-4 text-center">{row.weightPerPallet}</td>
                    <td className="py-4 px-4 text-center font-medium">{row.weightPerContainer}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>

        <AnimatedSection className="text-center mt-12" direction="scale">
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold mb-4">Need Custom Packaging?</h3>
            <p className="text-muted-foreground mb-6">
              We can accommodate special packaging requirements for large projects or specific shipping needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} className="mr-2" />
                Download Packing Guide
              </motion.button>
              <motion.button
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact for Custom Packaging
              </motion.button>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Packing;