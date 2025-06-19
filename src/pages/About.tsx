import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Eye, Award, Users, Leaf } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';

const About: React.FC = () => {
  const commitments = [
    {
      icon: Award,
      title: 'Durability',
      description: 'Our SPC flooring is engineered to withstand high foot traffic, resist scratches, and maintain its appearance for years.'
    },
    {
      icon: CheckCircle,
      title: 'Water Resistance',
      description: 'Ideal for areas prone to moisture, our flooring is 100% waterproof, making it perfect for kitchens, bathrooms, and basements.'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Materials',
      description: 'We prioritize sustainability by using non-toxic, recyclable materials in our products.'
    },
    {
      icon: Users,
      title: 'Easy Installation',
      description: 'With click-lock technology, our flooring can be installed quickly and efficiently, saving you time and labor costs.'
    }
  ];

  const whyChooseUs = [
    'Wide Range of Designs: From wood and stone finishes to modern patterns, we offer a variety of styles to suit any decor.',
    'Competitive Pricing: We provide premium quality flooring at affordable prices, ensuring value for your investment.'
  ];

  return (
    <div>
      <PageHeader 
        title="About FLORA BY EPSILON" 
        subtitle="Elevating Spaces with Premium SPC Flooring"
        backgroundImage="https://images.pexels.com/photos/6508935/pexels-photo-6508935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Introduction Section */}
      <section className="section container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="slideInLeft" duration={0.8}>
            <h2 className="mb-6">Welcome to FLORA BY EPSILON</h2>
            <p className="mb-4">
              At FLORA BY EPSILON, we specialize in providing high-quality Stone Plastic Composite (SPC) flooring solutions that combine durability, aesthetics, and eco-friendliness.
            </p>
            <p className="mb-6">
              Whether you're renovating your home or outfitting a commercial space, our flooring options are designed to meet diverse needs and preferences.
            </p>
          </AnimatedSection>
          
          <AnimatedSection direction="slideInRight" duration={0.8}>
            <motion.div 
              className="rounded-lg overflow-hidden shadow-xl"
              whileHover={{ 
                scale: 1.02, 
                rotateY: 5,
                rotateX: 2
              }}
              transition={{ duration: 0.4 }}
              style={{ perspective: 1000 }}
            >
              <img 
                src="https://images.pexels.com/photos/7061066/pexels-photo-7061066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="FLORA SPC Flooring Installation" 
                className="w-full h-auto"
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="section bg-muted py-20">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" direction="scale">
            <h2 className="mb-4">Our Commitment</h2>
            <p className="text-muted-foreground">
              We are dedicated to offering exceptional flooring solutions that exceed expectations in every aspect.
            </p>
          </AnimatedSection>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }
            }}
          >
            {commitments.map((commitment, index) => (
              <motion.div
                key={commitment.title}
                className="card p-6 text-center"
                variants={{
                  hidden: { 
                    opacity: 0, 
                    y: 60,
                    rotateX: -15,
                    scale: 0.8
                  },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    rotateX: 0,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }
                  }
                }}
                whileHover={{ 
                  y: -10,
                  rotateX: 5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                style={{ perspective: 1000 }}
              >
                <motion.div 
                  className="feature-icon mx-auto"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  <commitment.icon size={24} />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{commitment.title}</h3>
                <p className="text-muted-foreground">{commitment.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="slideInLeft" duration={0.8}>
            <motion.div 
              className="rounded-lg overflow-hidden shadow-xl"
              whileHover={{ 
                scale: 1.02, 
                rotateY: -5,
                rotateX: 2
              }}
              transition={{ duration: 0.4 }}
              style={{ perspective: 1000 }}
            >
              <img 
                src="https://images.pexels.com/photos/6048018/pexels-photo-6048018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="FLORA SPC Flooring Designs" 
                className="w-full h-auto"
              />
            </motion.div>
          </AnimatedSection>

          <AnimatedSection direction="slideInRight" duration={0.8}>
            <h2 className="mb-6">Why Choose Us?</h2>
            <div className="space-y-4">
              {whyChooseUs.map((reason, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <p>{reason}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section bg-muted py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="slideInLeft" duration={0.8}>
              <div className="card p-8 h-full">
                <div className="flex items-center mb-4">
                  <Eye className="text-primary mr-3" size={32} />
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground">
                  To be the leading provider of SPC flooring solutions, known for our commitment to quality, innovation, and customer satisfaction.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="slideInRight" duration={0.8}>
              <div className="card p-8 h-full">
                <div className="flex items-center mb-4">
                  <Target className="text-primary mr-3" size={32} />
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground">
                  To transform spaces with flooring that combines beauty, durability, and sustainability, while providing outstanding service to our clients.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section container">
        <AnimatedSection className="text-center" direction="scale">
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Space?</h3>
            <p className="text-muted-foreground mb-6">
              Discover how FLORA BY EPSILON can elevate your interior with our premium SPC flooring solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="/collection" className="btn btn-primary btn-lg px-8 py-4">
                  View Our Collections
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="/contact" className="btn btn-outline btn-lg px-8 py-4">
                  Contact Us Today
                </a>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default About;