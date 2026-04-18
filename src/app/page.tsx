"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { AlertTriangle, CreditCard, Eye, MessageCircle, ShieldCheck, Smartphone, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="medium"
        background="noiseDiagonalGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Tournaments",
          id: "tournaments",
        },
        {
          name: "Safety",
          id: "safety",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="HB Tournaments"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Play Tournaments. Win Real Cash. 100% Fair Play."
      description="Join trusted Free Fire tournaments with instant payouts."
      buttons={[
        {
          text: "Call Now",
          href: "tel:+919662777034",
        },
        {
          text: "Join Tournament",
          href: "#tournaments",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/bright-neon-colors-illuminated-arrow_23-2151204972.jpg"
      showBlur={true}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/man-holds-phone-front-laptop_482257-85726.jpg",
          alt: "Man holds phone in front of laptop",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-man-white-t-shirt-showing-winner-gesture-looking-blissful-front-view_176474-89367.jpg",
          alt: "Young man in white t-shirt showing winner gesture",
        },
        {
          src: "http://img.b2bpic.net/free-photo/joyous-person-listening-music-having-fun-dancing_482257-122383.jpg",
          alt: "Joyous person listening to music and having fun",
        },
        {
          src: "http://img.b2bpic.net/free-photo/pleased-indian-guy-cheering-after-winning-game-gaming-console_482257-122195.jpg",
          alt: "Pleased indian guy cheering after winning game",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-shot-pro-gamer-streaming-game-using-headset_482257-121655.jpg",
          alt: "Close up shot of pro gamer streaming game",
        },
      ]}
      avatarText="1000+ Active Players"
    />
  </div>

  <div id="how-it-works" data-section="how-it-works">
      <AboutMetric
      useInvertedBackground={false}
      title="Simple Steps to Win"
      metrics={[
        {
          icon: MessageCircle,
          label: "Register",
          value: "WhatsApp Us",
        },
        {
          icon: CreditCard,
          label: "Entry",
          value: "Pay ₹20",
        },
        {
          icon: Star,
          label: "Play",
          value: "Win Cash",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="tournaments" data-section="tournaments">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "m1",
          name: "Free Fire Grand Match",
          price: "₹20",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AkqzaM2rM7tfJiTexBhUW2Uqcc/uploaded-1776493412501-141irjci.jpg",
        },
        {
          id: "m2",
          name: "Squad Battle",
          price: "₹20",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AkqzaM2rM7tfJiTexBhUW2Uqcc/uploaded-1776493412501-bewsex5k.jpg",
        },
        {
          id: "m3",
          name: "Solo Ranking Tournament",
          price: "₹20",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AkqzaM2rM7tfJiTexBhUW2Uqcc/uploaded-1776493412501-58in1vxw.jpg",
        },
        {
          id: "m4",
          name: "Fast Paced Clash",
          price: "₹20",
          imageSrc: "http://img.b2bpic.net/free-photo/bright-neon-colors-illuminated-arrow_23-2151204972.jpg",
        },
        {
          id: "m5",
          name: "Elite Matchup",
          price: "₹20",
          imageSrc: "http://img.b2bpic.net/free-photo/young-confident-man-red-shirt-with-optical-glasses-with-headphones-points-isolated-white-wall_141793-35243.jpg",
        },
        {
          id: "m6",
          name: "Pro League Qualifier",
          price: "₹20",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-hacker-secret-hideout-bypassing-firewalls-launching-ddos-attacks-websites-rogue_482257-135963.jpg",
        },
      ]}
      title="Today's Matches"
      description="Don't miss the 10 PM showdown."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          title: "Great Payouts",
          quote: "Got my payment within 10 minutes. Smooth experience.",
          name: "Rahul S.",
          role: "Ahmedabad",
          imageSrc: "http://img.b2bpic.net/free-photo/young-confident-man-red-shirt-with-optical-glasses-with-headphones-points-isolated-white-wall_141793-35243.jpg",
        },
        {
          id: "2",
          title: "Verified Platform",
          quote: "Finally a legit tournament platform. No cheating.",
          name: "Aryan P.",
          role: "Verified Player",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-hacker-secret-hideout-bypassing-firewalls-launching-ddos-attacks-websites-rogue_482257-135963.jpg",
        },
        {
          id: "3",
          title: "Daily Winner",
          quote: "Small entry, good winnings. Playing daily now.",
          name: "Dev M.",
          role: "Regular Gamer",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-smiley-man-winning-videogame_23-2149349988.jpg",
        },
        {
          id: "4",
          title: "Very Smooth",
          quote: "The platform is super easy to use, highly recommended.",
          name: "Vikram K.",
          role: "Pro Player",
          imageSrc: "http://img.b2bpic.net/free-photo/man-holding-controller-close-up_23-2149005239.jpg",
        },
        {
          id: "5",
          title: "Fast Support",
          quote: "Support team responds quickly via WhatsApp.",
          name: "Sunny R.",
          role: "Tournament Winner",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-handsome-young-hipster-man-hazel-eyes-wearing-trendy-plaid-shirt-posing-near-city-cafe_291049-1495.jpg",
        },
      ]}
      title="Players Say"
      description="Real winners, real feedback."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Tournament Wins",
          description: "Winners from daily matches.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-man-playing-vr-with-winner-cup-dark-wall_179666-39941.jpg",
          },
          items: [],
          reverse: false,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AkqzaM2rM7tfJiTexBhUW2Uqcc/uploaded-1776493412501-141irjci.jpg",
          imageAlt: "esports trophy winner",
        },
        {
          title: "Professional Setup",
          description: "Quality match monitoring.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/gamer-enjoying-high-quality-game-streaming-it-online-flying-spaceship_482257-124196.jpg",
          },
          items: [],
          reverse: true,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AkqzaM2rM7tfJiTexBhUW2Uqcc/uploaded-1776493412501-bewsex5k.jpg",
          imageAlt: "esports trophy winner",
        },
        {
          title: "Event Atmosphere",
          description: "Live match intensity.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/high-angle-gaming-controller-chair_23-2149829127.jpg",
          },
          items: [],
          reverse: false,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AkqzaM2rM7tfJiTexBhUW2Uqcc/uploaded-1776493412501-58in1vxw.jpg",
          imageAlt: "esports trophy winner",
        },
        {
          title: "Trophy Celebrations",
          description: "Champions rising.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-holding-prize_23-2148634588.jpg",
          },
          items: [],
          reverse: true,
          imageSrc: "http://img.b2bpic.net/free-photo/bright-neon-colors-illuminated-arrow_23-2151204972.jpg",
          imageAlt: "esports trophy winner",
        },
        {
          title: "Community Vibe",
          description: "Real player moments.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/electronic-sports-league-background-3d-illustration_1419-2790.jpg",
          },
          items: [],
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-photo/young-confident-man-red-shirt-with-optical-glasses-with-headphones-points-isolated-white-wall_141793-35243.jpg",
          imageAlt: "esports trophy winner",
        },
        {
          title: "Ready for Action",
          description: "Gear up to win.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/shoulder-view-african-american-gamer-using-pc-gaming-setup-relaxing-playing-first-person-shooter-multiplayer-man-streaming-while-explaining-gameplay-online-action-game-talking-team_482257-49416.jpg",
          },
          items: [],
          reverse: true,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-hacker-secret-hideout-bypassing-firewalls-launching-ddos-attacks-websites-rogue_482257-135963.jpg",
          imageAlt: "esports trophy winner",
        },
      ]}
      title="Winner Gallery"
      description="Check out our latest champions in action."
    />
  </div>

  <div id="safety" data-section="safety">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "s1",
          icon: ShieldCheck,
          title: "Matches",
          value: "100% Fair",
        },
        {
          id: "s2",
          icon: Eye,
          title: "Monitoring",
          value: "Manual",
        },
        {
          id: "s3",
          icon: AlertTriangle,
          title: "Hacks",
          value: "Forbidden",
        },
        {
          id: "s4",
          icon: Smartphone,
          title: "Payouts",
          value: "Instant",
        },
      ]}
      title="Trust & Fair Play"
      description="We prioritize integrity in every match."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "cell-wave",
      }}
      tag="Reserve Your Slot"
      title="Join the Action Now"
      description="WhatsApp us at +91 9662777034 to get started. Follow us on Instagram @hb_tournaments."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="HB Tournaments"
      columns={[
        {
          title: "Quick Links",
          items: [
            {
              label: "Join Tournament",
              href: "#tournaments",
            },
            {
              label: "Fair Play Policy",
              href: "#safety",
            },
            {
              label: "WhatsApp Support",
              href: "https://wa.me/919662777034",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Instagram",
              href: "https://instagram.com/hb_tournaments",
            },
            {
              label: "Telegram",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2025 HB Tournaments. Play Hard. Win Big."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
