// Save as: lib/analytics.js

// Track page views
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-MVVHBV44BG', {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Specific tracking functions for your donation site
export const trackDonationCenterView = (centerName, state) => {
  event({
    action: 'view_donation_center',
    category: 'donation_centers',
    label: `${centerName} - ${state}`,
  });
};

export const trackStatePageView = (stateName) => {
  event({
    action: 'view_state_page',
    category: 'navigation',
    label: stateName,
  });
};

export const trackDirectionsClick = (centerName) => {
  event({
    action: 'get_directions',
    category: 'donation_centers',
    label: centerName,
  });
};

export const trackPhoneClick = (centerName) => {
  event({
    action: 'call_center',
    category: 'donation_centers',
    label: centerName,
  });
};

export const trackBlogPostView = (postTitle) => {
  event({
    action: 'view_blog_post',
    category: 'content',
    label: postTitle,
  });
};

export const trackNewsletterSignup = () => {
  event({
    action: 'newsletter_signup',
    category: 'engagement',
    label: 'blog_sidebar',
  });
};

export const trackSearchUsage = (searchTerm, resultCount) => {
  event({
    action: 'search',
    category: 'site_search',
    label: searchTerm,
    value: resultCount,
  });
};

export const trackMapInteraction = (action) => {
  event({
    action: action,
    category: 'map_usage',
    label: 'interactive_map',
  });
};