import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const { toast } = useToast();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileNames = Array.from(files).map(f => f.name);
      setUploadedFiles([...uploadedFiles, ...fileNames]);
      toast({
        title: "Files uploaded successfully",
        description: `${fileNames.length} file(s) added`,
      });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-secondary/30 to-white">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Plane" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">Trip Together</span>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'programs', 'testimonials', 'about', 'gallery', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`font-medium capitalize transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <Button className="hidden md:block">Get Started</Button>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Study Abroad.<br />
                <span className="text-primary">Experience the World.</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Join thousands of students exploring global education opportunities with Trip Together.
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('programs')}>
                  View Programs
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
                  Contact Us
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">10,000+</div>
                  <div className="text-sm text-muted-foreground">Happy Students</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/01ba4edb-49e6-4faa-958d-514891e340c6/files/80866835-abff-481f-8269-0d6fd08092e4.jpg"
                alt="Students in Canada"
                className="rounded-2xl shadow-2xl hover-scale"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg hidden md:block">
                <div className="flex items-center gap-3">
                  <Icon name="Award" className="text-primary" size={32} />
                  <div>
                    <div className="font-bold">Best Rated</div>
                    <div className="text-sm text-muted-foreground">Student Programs 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Programs</h2>
            <p className="text-xl text-muted-foreground">Discover amazing study abroad opportunities</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-scale transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <CardTitle>Canada Study Program</CardTitle>
                <CardDescription>21-day immersive experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <img 
                  src="https://cdn.poehali.dev/projects/01ba4edb-49e6-4faa-958d-514891e340c6/files/80866835-abff-481f-8269-0d6fd08092e4.jpg"
                  alt="Canada Program"
                  className="rounded-lg w-full h-48 object-cover"
                />
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Calendar" size={16} />
                    <span>21 Days</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Users" size={16} />
                    <span>Small Groups (15-20)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="BookOpen" size={16} />
                    <span>Academic + Cultural</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="text-3xl font-bold text-primary">5,300 CAD</div>
                  <p className="text-sm text-muted-foreground mt-1">All-inclusive package</p>
                </div>
                <Button className="w-full" onClick={() => scrollToSection('contact')}>
                  Apply Now
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="GraduationCap" size={24} className="text-primary" />
                </div>
                <CardTitle>UK Academic Exchange</CardTitle>
                <CardDescription>14-day university program</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <img 
                  src="https://cdn.poehali.dev/projects/01ba4edb-49e6-4faa-958d-514891e340c6/files/cc8d3c2b-d9f1-4208-904c-b17cd71e304c.jpg"
                  alt="UK Program"
                  className="rounded-lg w-full h-48 object-cover"
                />
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Calendar" size={16} />
                    <span>14 Days</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Users" size={16} />
                    <span>Small Groups (12-18)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="BookOpen" size={16} />
                    <span>Top Universities</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="text-3xl font-bold text-primary">4,200 GBP</div>
                  <p className="text-sm text-muted-foreground mt-1">Accommodation included</p>
                </div>
                <Button className="w-full" onClick={() => scrollToSection('contact')}>
                  Apply Now
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Globe" size={24} className="text-primary" />
                </div>
                <CardTitle>European Tour</CardTitle>
                <CardDescription>30-day multi-country</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <img 
                  src="https://cdn.poehali.dev/projects/01ba4edb-49e6-4faa-958d-514891e340c6/files/10587246-f61e-485b-86ce-ad51eb00b111.jpg"
                  alt="Europe Program"
                  className="rounded-lg w-full h-48 object-cover"
                />
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Calendar" size={16} />
                    <span>30 Days</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Users" size={16} />
                    <span>Groups (20-25)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="BookOpen" size={16} />
                    <span>5 Countries</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="text-3xl font-bold text-primary">6,800 EUR</div>
                  <p className="text-sm text-muted-foreground mt-1">Full package deal</p>
                </div>
                <Button className="w-full" onClick={() => scrollToSection('contact')}>
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Student Testimonials</h2>
            <p className="text-xl text-muted-foreground">Hear from our happy travelers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                country: "USA",
                text: "The Canada program changed my life! Amazing experience, great organization, and lifelong friendships.",
                rating: 5
              },
              {
                name: "Michael Chen",
                country: "Singapore",
                text: "Professional team, incredible destinations, and perfect balance of study and adventure. Highly recommend!",
                rating: 5
              },
              {
                name: "Emma Martinez",
                country: "Spain",
                text: "Best decision ever! The cultural immersion and academic quality exceeded all my expectations.",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <Card key={idx} className="hover-scale">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={20} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.country}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Icon key={i} name="Star" className="text-primary fill-primary" size={16} />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Trip Together</h2>
              <div className="space-y-4 text-lg">
                <p>
                  For over 15 years, Trip Together has been connecting students with life-changing 
                  educational experiences around the globe.
                </p>
                <p>
                  With <span className="font-bold text-primary">more than 10,000 satisfied students</span>, 
                  we've established ourselves as a trusted partner in international education.
                </p>
                <p>
                  Our programs combine academic excellence with cultural immersion, ensuring students 
                  gain both knowledge and invaluable life experiences.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="space-y-2">
                  <Icon name="Shield" className="text-primary" size={32} />
                  <h3 className="font-bold">Safe & Secure</h3>
                  <p className="text-sm text-muted-foreground">24/7 support and insurance</p>
                </div>
                <div className="space-y-2">
                  <Icon name="Heart" className="text-primary" size={32} />
                  <h3 className="font-bold">Student-Focused</h3>
                  <p className="text-sm text-muted-foreground">Your success is our priority</p>
                </div>
                <div className="space-y-2">
                  <Icon name="Globe" className="text-primary" size={32} />
                  <h3 className="font-bold">Global Network</h3>
                  <p className="text-sm text-muted-foreground">Partners in 25+ countries</p>
                </div>
                <div className="space-y-2">
                  <Icon name="Award" className="text-primary" size={32} />
                  <h3 className="font-bold">Award Winning</h3>
                  <p className="text-sm text-muted-foreground">Industry recognized quality</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/01ba4edb-49e6-4faa-958d-514891e340c6/files/cc8d3c2b-d9f1-4208-904c-b17cd71e304c.jpg"
                alt="Students learning together"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Photo Gallery</h2>
            <p className="text-xl text-muted-foreground">Memories from our adventures</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <img 
              src="https://cdn.poehali.dev/projects/01ba4edb-49e6-4faa-958d-514891e340c6/files/80866835-abff-481f-8269-0d6fd08092e4.jpg"
              alt="Gallery 1"
              className="rounded-xl w-full h-64 object-cover hover-scale cursor-pointer"
            />
            <img 
              src="https://cdn.poehali.dev/projects/01ba4edb-49e6-4faa-958d-514891e340c6/files/cc8d3c2b-d9f1-4208-904c-b17cd71e304c.jpg"
              alt="Gallery 2"
              className="rounded-xl w-full h-64 object-cover hover-scale cursor-pointer"
            />
            <img 
              src="https://cdn.poehali.dev/projects/01ba4edb-49e6-4faa-958d-514891e340c6/files/10587246-f61e-485b-86ce-ad51eb00b111.jpg"
              alt="Gallery 3"
              className="rounded-xl w-full h-64 object-cover hover-scale cursor-pointer"
            />
            <img 
              src="https://cdn.poehali.dev/projects/01ba4edb-49e6-4faa-958d-514891e340c6/files/80866835-abff-481f-8269-0d6fd08092e4.jpg"
              alt="Gallery 4"
              className="rounded-xl w-full h-64 object-cover hover-scale cursor-pointer"
            />
            <img 
              src="https://cdn.poehali.dev/projects/01ba4edb-49e6-4faa-958d-514891e340c6/files/10587246-f61e-485b-86ce-ad51eb00b111.jpg"
              alt="Gallery 5"
              className="rounded-xl w-full h-64 object-cover hover-scale cursor-pointer"
            />
            <img 
              src="https://cdn.poehali.dev/projects/01ba4edb-49e6-4faa-958d-514891e340c6/files/cc8d3c2b-d9f1-4208-904c-b17cd71e304c.jpg"
              alt="Gallery 6"
              className="rounded-xl w-full h-64 object-cover hover-scale cursor-pointer"
            />
          </div>
        </div>
      </section>

      <section id="documents" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="FileUp" className="text-primary" size={32} />
                  <CardTitle className="text-3xl">Upload Documents</CardTitle>
                </div>
                <CardDescription>
                  Upload your required travel documents for processing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Label htmlFor="documents">Required Documents</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <Icon name="Upload" className="mx-auto text-muted-foreground mb-3" size={48} />
                    <Input
                      id="documents"
                      type="file"
                      multiple
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <label htmlFor="documents" className="cursor-pointer">
                      <p className="text-lg font-medium mb-1">Click to upload files</p>
                      <p className="text-sm text-muted-foreground">
                        Passport, ID, Photos, Medical forms
                      </p>
                    </label>
                  </div>
                </div>
                
                {uploadedFiles.length > 0 && (
                  <div className="space-y-2">
                    <Label>Uploaded Files ({uploadedFiles.length})</Label>
                    <div className="space-y-2">
                      {uploadedFiles.map((file, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-3 bg-secondary rounded-lg">
                          <Icon name="FileCheck" className="text-primary" size={20} />
                          <span className="flex-1 text-sm">{file}</span>
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => setUploadedFiles(uploadedFiles.filter((_, i) => i !== idx))}
                          >
                            <Icon name="X" size={16} />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-accent/50 p-4 rounded-lg">
                  <div className="flex gap-3">
                    <Icon name="Info" className="text-primary flex-shrink-0" size={20} />
                    <div className="text-sm">
                      <p className="font-medium mb-1">Document Requirements:</p>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Valid passport (6+ months validity)</li>
                        <li>2 passport-size photos</li>
                        <li>Student ID or enrollment proof</li>
                        <li>Medical clearance form</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-xl text-muted-foreground">Ready to start your adventure? Contact us today!</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>We'll respond within 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 234 567 8900" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your travel plans..."
                        rows={4}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Mail" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">info@triptogether.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Phone" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-medium">Office</p>
                        <p className="text-sm text-muted-foreground">
                          123 Education Street<br />
                          New York, NY 10001<br />
                          United States
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Office Hours</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Plane" size={24} />
                <span className="text-xl font-bold">Trip Together</span>
              </div>
              <p className="text-sm opacity-90">
                Creating unforgettable educational experiences for students worldwide.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li><button onClick={() => scrollToSection('programs')} className="hover:underline">Programs</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:underline">About Us</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="hover:underline">Testimonials</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:underline">Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Programs</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>Canada Study Program</li>
                <li>UK Academic Exchange</li>
                <li>European Tour</li>
                <li>Custom Programs</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                <Button size="sm" variant="secondary" className="w-10 h-10 p-0">
                  <Icon name="Facebook" size={18} />
                </Button>
                <Button size="sm" variant="secondary" className="w-10 h-10 p-0">
                  <Icon name="Twitter" size={18} />
                </Button>
                <Button size="sm" variant="secondary" className="w-10 h-10 p-0">
                  <Icon name="Instagram" size={18} />
                </Button>
                <Button size="sm" variant="secondary" className="w-10 h-10 p-0">
                  <Icon name="Linkedin" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
            <p>&copy; 2024 Trip Together. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;