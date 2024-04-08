import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutAboutMe extends Schema.Component {
  collectionName: 'components_about_about_mes';
  info: {
    displayName: 'about_me';
    icon: 'pencil';
    description: '';
  };
  attributes: {
    descripition: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface AboutInspiration extends Schema.Component {
  collectionName: 'components_about_inspirations';
  info: {
    displayName: 'inspiration';
    icon: 'feather';
  };
  attributes: {
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface ComponentsHeroSection extends Schema.Component {
  collectionName: 'components_components_hero_sections';
  info: {
    displayName: 'hero_section';
    icon: 'house';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    image: Attribute.Media;
  };
}

export interface ComponentsLastSection extends Schema.Component {
  collectionName: 'components_components_last_sections';
  info: {
    displayName: 'last_section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
  };
}

export interface ContactContactDetail extends Schema.Component {
  collectionName: 'components_contact_contact_details';
  info: {
    displayName: 'contact_detail';
    icon: 'information';
  };
  attributes: {
    description: Attribute.Text;
    phone_number: Attribute.BigInteger;
    address: Attribute.String;
    email: Attribute.Email;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about.about-me': AboutAboutMe;
      'about.inspiration': AboutInspiration;
      'components.hero-section': ComponentsHeroSection;
      'components.last-section': ComponentsLastSection;
      'contact.contact-detail': ContactContactDetail;
    }
  }
}
