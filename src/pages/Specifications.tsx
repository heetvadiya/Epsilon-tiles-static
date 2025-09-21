import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';
import PDFDownloadButton from '../components/PDFDownloadButton';

const Specifications: React.FC = () => {
  const specifications = [
    {
      category: 'Physical Properties',
      tests: [
        { test: 'Thickness', standard: 'EN 428', result: '4.0 / 5.0 / 6.0 mm', status: 'pass' },
        { test: 'Wear Layer', standard: 'EN 429', result: '12 & 20 mil', status: 'pass' },
        { test: 'Overall Thickness', standard: 'EN 428', result: '5.5 / 6.5 / 7.5 mm', status: 'pass' },
        { test: 'Length', standard: 'EN 427', result: '1220 mm', status: 'pass' },
        { test: 'Width', standard: 'EN 427', result: '180 / 230 mm', status: 'pass' },
      ]
    },
    {
      category: 'Performance Properties',
      tests: [
        { test: 'Abrasion Resistance', standard: 'EN 649', result: 'Group T', status: 'pass' },
        { test: 'Impact Resistance', standard: 'EN 1533', result: 'No damage', status: 'pass' },
        { test: 'Indentation Resistance', standard: 'EN 433', result: '≤ 0.10 mm', status: 'pass' },
        { test: 'Flexibility', standard: 'EN 435', result: 'No cracking', status: 'pass' },
        { test: 'Dimensional Stability', standard: 'EN 434', result: '≤ 0.25%', status: 'pass' },
      ]
    },
    {
      category: 'Chemical & Stain Resistance',
      tests: [
        { test: 'Chemical Resistance', standard: 'EN 423', result: 'No visible change', status: 'pass' },
        { test: 'Stain Resistance', standard: 'EN 438-2', result: 'Grade 4-5', status: 'pass' },
        { test: 'Light Fastness', standard: 'EN 20105-B02', result: 'Grade 6', status: 'pass' },
        { test: 'Cigarette Burn', standard: 'EN 1399', result: 'No damage', status: 'pass' },
      ]
    },
    {
      category: 'Safety & Environmental',
      tests: [
        { test: 'Slip Resistance', standard: 'EN 13893', result: 'Class DS', status: 'pass' },
        { test: 'Fire Behavior', standard: 'EN 13501-1', result: 'Bfl-S1', status: 'pass' },
        { test: 'Smoke Density', standard: 'ASTM E662', result: '< 450', status: 'pass' },
        { test: 'Formaldehyde Emission', standard: 'EN 717-1', result: 'E1', status: 'pass' },
        { test: 'VOC Emissions', standard: 'EN 16516', result: 'A+', status: 'pass' },
      ]
    },
    {
      category: 'Thermal Properties',
      tests: [
        { test: 'Heat Stability', standard: 'EN 434', result: '≤ 0.25%', status: 'pass' },
        { test: 'Thermal Conductivity', standard: 'EN 12664', result: '0.25 W/mK', status: 'pass' },
        { test: 'Radiant Heat Compatibility', standard: 'Internal', result: 'Up to 27°C', status: 'pass' },
      ]
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Technical Specifications" 
        subtitle="Comprehensive testing results and performance data for FLORA SPC flooring"
        backgroundImage="https://360.epsiloninc.in/uploads/preview/1767_SESSILE_OAK.jpg"
      />
      
      <section className="section container">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" direction="scale">
          <h2 className="mb-4">Performance Standards</h2>
          <p className="text-muted-foreground">
            FLORA SPC flooring meets and exceeds all relevant EN and ASTM standards, ensuring superior performance and safety in all applications.
          </p>
        </AnimatedSection>

        <div className="space-y-8">
          {specifications.map((category, categoryIndex) => (
            <AnimatedSection 
              key={category.category}
              direction="up"
              delay={categoryIndex * 0.1}
            >
              <div className="card">
                <div className="bg-primary/10 px-6 py-4 border-b border-border">
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-6 font-medium">Test</th>
                        <th className="text-left py-3 px-6 font-medium">Standard</th>
                        <th className="text-left py-3 px-6 font-medium">Result</th>
                        <th className="text-center py-3 px-6 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.tests.map((test, testIndex) => (
                        <motion.tr 
                          key={test.test}
                          className="border-b border-border hover:bg-muted/50 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: testIndex * 0.05 }}
                        >
                          <td className="py-3 px-6">{test.test}</td>
                          <td className="py-3 px-6 text-muted-foreground">{test.standard}</td>
                          <td className="py-3 px-6 font-medium">{test.result}</td>
                          <td className="py-3 px-6 text-center">
                            <CheckCircle className="w-5 h-5 text-primary mx-auto" />
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12" direction="scale">
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold mb-4">Download Complete Specifications</h3>
            <p className="text-muted-foreground mb-6">
              Get the complete technical documentation including detailed test results, installation guidelines, and warranty information.
            </p>
            <PDFDownloadButton
              pdfUrl="/pdfs/specifications.pdf"
              label="Download PDF Specifications"
            />
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Specifications;