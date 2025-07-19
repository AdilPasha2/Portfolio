import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Initialize EmailJS with your public key from environment variables
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '71ud4IEeKtMM3DCtp';
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_13ls6xf';
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_05x74ix';
  
  emailjs.init(publicKey);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      setStatus('Please fill in all fields.');
      return;
    }

    setIsLoading(true);
    setStatus('');

    // Send email using EmailJS with environment variables
    emailjs.sendForm(
      serviceId,    // Your service ID from env
      templateId,   // Your template ID from env
      form.current,
      publicKey     // Your public key from env
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      setStatus('✅ Thank you for your message! I will get back to you soon.');
      
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
      form.current.reset();
    })
    .catch((error) => {
      console.error('Email sending failed:', error.text);
      setStatus('❌ Sorry, something went wrong. Please try again or contact me directly.');
    })
    .finally(() => {
      setIsLoading(false);
      // Clear status message after 8 seconds
      setTimeout(() => setStatus(''), 8000);
    });
  };

  return (
    <section id="contact" className="py-20 bg-dark-700">
      <div className="max-w-7xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-accent-500 text-sm font-semibold uppercase tracking-wide">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            CONTACT ME
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-on-scroll">
          <div className="space-y-6">
            <div className="flex items-center group">
              <div className="bg-primary-500 rounded-full p-4 text-dark-700 transition-transform duration-300 group-hover:scale-110">
                <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-primary-500">Email</h4>
                <p className="text-dark-300">adilpasharazvi2@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center group">
              <div className="bg-primary-500 rounded-full p-4 text-dark-700 transition-transform duration-300 group-hover:scale-110">
                <FontAwesomeIcon icon={faPhone} className="text-lg" />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-primary-500">Phone</h4>
                <p className="text-dark-300">+91 9019282527</p>
              </div>
            </div>
            <div className="flex items-center group">
              <div className="bg-primary-500 rounded-full p-4 text-dark-700 transition-transform duration-300 group-hover:scale-110">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-lg" />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-primary-500">Location</h4>
                <p className="text-dark-300">Bangalore, India</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form 
            ref={form} 
            onSubmit={handleSubmit} 
            className="bg-dark-600 p-8 rounded-xl shadow-lg border border-primary-500/20"
          >
            <input 
              type="text" 
              name="from_name" 
              value={name} 
              onChange={e => setName(e.target.value)} 
              placeholder="Your Name" 
              required 
              disabled={isLoading}
              className="w-full p-4 mb-4 bg-dark-700 text-white border border-dark-600 rounded focus:outline-none focus:border-primary-500 disabled:opacity-50"
            />
            <input 
              type="email" 
              name="from_email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              placeholder="Your Email" 
              required 
              disabled={isLoading}
              className="w-full p-4 mb-4 bg-dark-700 text-white border border-dark-600 rounded focus:outline-none focus:border-primary-500 disabled:opacity-50"
            />
            <textarea 
              name="message" 
              value={message} 
              onChange={e => setMessage(e.target.value)} 
              placeholder="Your Message" 
              rows="5" 
              required 
              disabled={isLoading}
              className="w-full p-4 mb-4 bg-dark-700 text-white border border-dark-600 rounded focus:outline-none focus:border-primary-500 disabled:opacity-50"
            />
            <button 
              type="submit" 
              disabled={isLoading}
              className={`w-full py-4 font-semibold rounded transition-all duration-300 ${
                isLoading 
                  ? 'bg-dark-500 text-dark-300 cursor-not-allowed' 
                  : 'bg-primary-500 text-dark-700 hover:bg-primary-600 transform hover:scale-105'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-dark-700 mr-2"></div>
                  Sending...
                </div>
              ) : (
                'Send Message'
              )}
            </button>
            {status && (
              <div className={`mt-4 p-3 rounded-lg text-center font-medium ${
                status.includes('✅') 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                  : 'bg-red-500/20 text-red-400 border border-red-500/30'
              }`}>
                {status}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
