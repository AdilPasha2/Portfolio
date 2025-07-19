import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Analytics = () => {
  useEffect(() => {
    // Track visitor information
    const trackVisitor = async () => {
      try {
        // Get visitor information
        const visitorInfo = {
          timestamp: new Date().toISOString(),
          user_agent: navigator.userAgent,
          language: navigator.language,
          screen_resolution: `${screen.width}x${screen.height}`,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          referrer: document.referrer || 'Direct',
          page_url: window.location.href,
          visit_duration: Date.now() // Will be updated on page unload
        };

        // Log visitor info (you can also send this to EmailJS or a database)
        console.log('Visitor tracked:', visitorInfo);

        // Optional: Send visitor data to EmailJS (create a separate template for this)
        // Uncomment the below code if you want to track all visitors via email
        /*
        const visitorData = {
          visitor_info: JSON.stringify(visitorInfo, null, 2),
          visit_time: new Date().toLocaleString()
        };

        emailjs.send(
          'service_13ls6xf',
          'template_visitor_tracking', // You'd need to create this template
          visitorData,
          '71ud4IEeKtMM3DCtp'
        ).catch(err => console.log('Visitor tracking failed:', err));
        */

        // Store in localStorage for analytics
        const existingVisits = JSON.parse(localStorage.getItem('portfolio_visits') || '[]');
        existingVisits.push(visitorInfo);
        
        // Keep only last 10 visits to avoid storage bloat
        const recentVisits = existingVisits.slice(-10);
        localStorage.setItem('portfolio_visits', JSON.stringify(recentVisits));

        // Track session duration
        const startTime = Date.now();
        
        const trackSessionEnd = () => {
          const sessionDuration = Date.now() - startTime;
          console.log(`Session duration: ${Math.round(sessionDuration / 1000)} seconds`);
          
          // You can send session data here if needed
          const sessionData = {
            ...visitorInfo,
            session_duration: sessionDuration,
            pages_viewed: 1 // You can enhance this to track page changes
          };
          
          // Store session data
          const sessions = JSON.parse(localStorage.getItem('portfolio_sessions') || '[]');
          sessions.push(sessionData);
          localStorage.setItem('portfolio_sessions', JSON.stringify(sessions.slice(-5)));
        };

        // Track when user leaves the page
        window.addEventListener('beforeunload', trackSessionEnd);
        
        // Clean up event listener
        return () => {
          window.removeEventListener('beforeunload', trackSessionEnd);
        };

      } catch (error) {
        console.error('Visitor tracking failed:', error);
      }
    };

    // Track visitor after a small delay to ensure page is fully loaded
    const timer = setTimeout(trackVisitor, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // This component doesn't render anything
  return null;
};

// Optional: Analytics dashboard component to view stored data
export const AnalyticsDashboard = () => {
  const visits = JSON.parse(localStorage.getItem('portfolio_visits') || '[]');
  const sessions = JSON.parse(localStorage.getItem('portfolio_sessions') || '[]');

  if (visits.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 bg-dark-600 text-white p-4 rounded-lg shadow-lg max-w-sm">
      <h3 className="font-bold mb-2">Analytics Debug</h3>
      <p className="text-sm">Total visits tracked: {visits.length}</p>
      <p className="text-sm">Sessions: {sessions.length}</p>
      <button
        onClick={() => {
          localStorage.removeItem('portfolio_visits');
          localStorage.removeItem('portfolio_sessions');
          window.location.reload();
        }}
        className="mt-2 text-xs bg-red-500 px-2 py-1 rounded"
      >
        Clear Data
      </button>
    </div>
  );
};

export default Analytics;
