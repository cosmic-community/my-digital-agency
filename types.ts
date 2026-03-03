export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    name?: string;
    description?: string;
    icon_emoji?: string;
    featured_image?: CosmicImage;
  };
}

export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    name?: string;
    role?: string;
    bio?: string;
    photo?: CosmicImage;
    linkedin_url?: string;
  };
}

export interface PortfolioWork extends CosmicObject {
  type: 'portfolio-works';
  metadata: {
    description?: string;
    featured_image?: CosmicImage;
    project_url?: string;
    service?: Service;
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name?: string;
    company?: string;
    quote?: string;
    avatar?: CosmicImage;
  };
}