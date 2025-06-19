import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';
import PDFDownloadButton from '../components/PDFDownloadButton';

const Packing: React.FC = () => {
  const packingData = [
    {
      size: '181 × 1220 mm',
      thickness: '4+1 mm',
      pcsPerBox: 10,
      sqmPerBox: 2.21,
      boxesPerPallet: 75,
      sqmPerPallet: 165.75,
      palletsPerContainer: 20,
      totalBoxes: 1500,
      totalSqm: 3315,
      weightPerPallet: '1,380 kg',
      weightPerContainer: '27,600 kg'
    },
    {
      size: '181 × 1220 mm',
      thickness: '5+1 mm',
      pcsPerBox: 8,
      sqmPerBox: 1.77,
      boxesPerPallet: 75,
      sqmPerPallet: 132.75,
      palletsPerContainer: 20,
      totalBoxes: 1500,
      totalSqm: 2655,
      weightPerPallet: '1,387.5 kg',
      weightPerContainer: '27,750 kg'
    },
    {
      size: '181 × 1220 mm',
      thickness: '6+1 mm',
      pcsPerBox: 7,
      sqmPerBox: 1.55,
      boxesPerPallet: 75,
      sqmPerPallet: 116.25,
      palletsPerContainer: 19,
      totalBoxes: 1425,
      totalSqm: 2208.75,
      weightPerPallet: '1,455 kg',
      weightPerContainer: '27,645 kg'
    },
    {
      size: '181 × 1220 mm',
      thickness: '4+1.5 mm',
      pcsPerBox: 9,
      sqmPerBox: 1.99,
      boxesPerPallet: 75,
      sqmPerPallet: 149.25,
      palletsPerContainer: 20,
      totalBoxes: 1500,
      totalSqm: 2985,
      weightPerPallet: '1,267.5 kg',
      weightPerContainer: '25,350 kg'
    },
    {
      size: '181 × 1220 mm',
      thickness: '5+1.5 mm',
      pcsPerBox: 8,
      sqmPerBox: 1.77,
      boxesPerPallet: 75,
      sqmPerPallet: 132.75,
      palletsPerContainer: 20,
      totalBoxes: 1500,
      totalSqm: 2655,
      weightPerPallet: '1,387.5 kg',
      weightPerContainer: '27,750 kg'
    },
    {
      size: '181 × 1220 mm',
      thickness: '6+1.5 mm',
      pcsPerBox: 7,
      sqmPerBox: 1.55,
      boxesPerPallet: 75,
      sqmPerPallet: 116.25,
      palletsPerContainer: 19,
      totalBoxes: 1425,
      totalSqm: 2208.75,
      weightPerPallet: '1,455 kg',
      weightPerContainer: '27,645 kg'
    },
    {
      size: '230 × 1220 mm',
      thickness: '4+1.5 mm',
      pcsPerBox: 8,
      sqmPerBox: 2.24,
      boxesPerPallet: 48,
      sqmPerPallet: 107.52,
      palletsPerContainer: 30,
      totalBoxes: 1440,
      totalSqm: 3225.6,
      weightPerPallet: '918 kg',
      weightPerContainer: '27,540 kg'
    },
    {
      size: '230 × 1220 mm',
      thickness: '5+1.5 mm',
      pcsPerBox: 7,
      sqmPerBox: 1.96,
      boxesPerPallet: 48,
      sqmPerPallet: 94.08,
      palletsPerContainer: 28,
      totalBoxes: 1344,
      totalSqm: 2634.24,
      weightPerPallet: '994.8 kg',
      weightPerContainer: '27,854 kg'
    },
    {
      size: '230 × 1220 mm',
      thickness: '6+1.5 mm',
      pcsPerBox: 6,
      sqmPerBox: 1.68,
      boxesPerPallet: 48,
      sqmPerPallet: 80.64,
      palletsPerContainer: 25,
      totalBoxes: 1200,
      totalSqm: 2016,
      weightPerPallet: '1,083.6 kg',
      weightPerContainer: '27,090 kg'
    },
    {
      size: '230 × 1524 mm',
      thickness: '4+1.5 mm',
      pcsPerBox: 8,
      sqmPerBox: 2.8,
      boxesPerPallet: 44,
      sqmPerPallet: 123.2,
      palletsPerContainer: 21,
      totalBoxes: 924,
      totalSqm: 2587.2,
      weightPerPallet: '1,058.6 kg',
      weightPerContainer: '22,231 kg'
    },
    {
      size: '230 × 1524 mm',
      thickness: '5+1.5 mm',
      pcsPerBox: 7,
      sqmPerBox: 2.45,
      boxesPerPallet: 44,
      sqmPerPallet: 107.8,
      palletsPerContainer: 21,
      totalBoxes: 924,
      totalSqm: 2263.8,
      weightPerPallet: '1,144.4 kg',
      weightPerContainer: '24,032 kg'
    },
    {
      size: '230 × 1524 mm',
      thickness: '6+1.5 mm',
      pcsPerBox: 6,
      sqmPerBox: 2.1,
      boxesPerPallet: 44,
      sqmPerPallet: 92.4,
      palletsPerContainer: 21,
      totalBoxes: 924,
      totalSqm: 1940.4,
      weightPerPallet: '1,175.2 kg',
      weightPerContainer: '24,679 kg'
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
                  <th className="text-left py-4 px-4 font-semibold">Core + Lxpe</th>
                  <th className="text-center py-4 px-4 font-semibold border-l-2 border-primary/20">PCS/Box</th>
                  <th className="text-center py-4 px-4 font-semibold">SQM/Box</th>
                  <th className="text-center py-4 px-4 font-semibold border-l-2 border-primary/20">Boxes/Pallet</th>
                  <th className="text-center py-4 px-4 font-semibold">SQM/Pallet</th>
                  <th className="text-center py-4 px-4 font-semibold">Weight/Pallet</th>
                  <th className="text-center py-4 px-4 font-semibold border-l-2 border-primary/20">Pallets/Container</th>
                  <th className="text-center py-4 px-4 font-semibold">Total Boxes</th>
                  <th className="text-center py-4 px-4 font-semibold">Total SQM</th>
                  <th className="text-center py-4 px-4 font-semibold">Weight/Container</th>
                </tr>
              </thead>
              <tbody>
                {/* 181 × 1220 mm Group */}
                {packingData.slice(0, 6).map((row, index) => (
                  <motion.tr 
                    key={index}
                    className={`border-b border-border hover:bg-muted/50 transition-colors ${
                      index === 0 || index === 3 || index === 1 || index === 2 || index === 4 || index === 5 ? 'bg-green-50/50 border-t-2 border-t-green-200' : 
                      index === 5 ? 'border-b-2 border-b-green-200' : ''
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <td className="py-4 px-4 font-medium">{row.size}</td>
                    <td className="py-4 px-4">{row.thickness}</td>
                    <td className="py-4 px-4 text-center border-l-2 border-primary/10">{row.pcsPerBox}</td>
                    <td className="py-4 px-4 text-center">{row.sqmPerBox}</td>
                    <td className="py-4 px-4 text-center border-l-2 border-primary/10">{row.boxesPerPallet}</td>
                    <td className="py-4 px-4 text-center">{row.sqmPerPallet}</td>
                    <td className="py-4 px-4 text-center">{row.weightPerPallet}</td>
                    <td className="py-4 px-4 text-center border-l-2 border-primary/10">{row.palletsPerContainer}</td>
                    <td className="py-4 px-4 text-center font-medium text-primary">{row.totalBoxes}</td>
                    <td className="py-4 px-4 text-center font-medium text-primary">{row.totalSqm}</td>
                    <td className="py-4 px-4 text-center font-medium">{row.weightPerContainer}</td>
                  </motion.tr>
                ))}
                
                {/* 230 × 1220 mm Group */}
                {packingData.slice(6, 9).map((row, index) => (
                  <motion.tr 
                    key={index + 6}
                    className={`border-b border-border hover:bg-muted/50 transition-colors ${
                      index === 0 || index === 1 || index === 2 ? 'bg-orange-50/50 border-t-2 border-t-orange-200' : 
                      index === 2 ? 'border-b-2 border-b-orange-200' : ''
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: (index + 6) * 0.1 }}
                  >
                    <td className="py-4 px-4 font-medium">{row.size}</td>
                    <td className="py-4 px-4">{row.thickness}</td>
                    <td className="py-4 px-4 text-center border-l-2 border-primary/10">{row.pcsPerBox}</td>
                    <td className="py-4 px-4 text-center">{row.sqmPerBox}</td>
                    <td className="py-4 px-4 text-center border-l-2 border-primary/10">{row.boxesPerPallet}</td>
                    <td className="py-4 px-4 text-center">{row.sqmPerPallet}</td>
                    <td className="py-4 px-4 text-center">{row.weightPerPallet}</td>
                    <td className="py-4 px-4 text-center border-l-2 border-primary/10">{row.palletsPerContainer}</td>
                    <td className="py-4 px-4 text-center font-medium text-primary">{row.totalBoxes}</td>
                    <td className="py-4 px-4 text-center font-medium text-primary">{row.totalSqm}</td>
                    <td className="py-4 px-4 text-center font-medium">{row.weightPerContainer}</td>
                  </motion.tr>
                ))}
                
                {/* 230 × 1524 mm Group */}
                {packingData.slice(9, 12).map((row, index) => (
                  <motion.tr 
                    key={index + 9}
                    className={`border-b border-border hover:bg-muted/50 transition-colors ${
                      index === 0 || index === 1 || index === 2 ? 'bg-blue-50/50 border-t-2 border-t-blue-200' : 
                      index === 2 ? 'border-b-2 border-b-blue-200' : ''
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: (index + 9) * 0.1 }}
                  >
                    <td className="py-4 px-4 font-medium">{row.size}</td>
                    <td className="py-4 px-4">{row.thickness}</td>
                    <td className="py-4 px-4 text-center border-l-2 border-primary/10">{row.pcsPerBox}</td>
                    <td className="py-4 px-4 text-center">{row.sqmPerBox}</td>
                    <td className="py-4 px-4 text-center border-l-2 border-primary/10">{row.boxesPerPallet}</td>
                    <td className="py-4 px-4 text-center">{row.sqmPerPallet}</td>
                    <td className="py-4 px-4 text-center">{row.weightPerPallet}</td>
                    <td className="py-4 px-4 text-center border-l-2 border-primary/10">{row.palletsPerContainer}</td>
                    <td className="py-4 px-4 text-center font-medium text-primary">{row.totalBoxes}</td>
                    <td className="py-4 px-4 text-center font-medium text-primary">{row.totalSqm}</td>
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
              <PDFDownloadButton
                pdfUrl="/pdfs/packing-guide.pdf"
                label="Download Packing Guide"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact" className="btn btn-outline px-8 py-4">
                  Contact for Custom Packaging
                </Link>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Packing;