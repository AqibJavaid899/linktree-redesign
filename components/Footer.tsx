import Image from "next/image";

import SocialMediaIcon from "./SocialMediaIcon";

interface Props {}

const Footer = (props: Props) => {
  return (
    <section className="flex flex-col justify-center items-center mt-8">
      <div className="flex gap-x-5">
        <SocialMediaIcon
          title="twitter"
          imageUrl="/assets/twitterIcon.svg"
          href="https://twitter.com/its_aqibzid"
        />

        <SocialMediaIcon
          title="github"
          imageUrl="/assets/githubIcon.svg"
          href="https://github.com/AqibJavaid899"
        />
        <SocialMediaIcon
          title="linkedin"
          imageUrl="/assets/linkedinIcon.svg"
          href="https://www.linkedin.com/in/aqib-javaid-b52124186/"
        />
        <SocialMediaIcon
          title="facebook"
          imageUrl="/assets/facebookIcon.svg"
          href="https://www.facebook.com/profile.php?id=100019090278101"
        />

        <SocialMediaIcon
          title="instagram"
          imageUrl="/assets/instagramIcon.svg"
          href="https://www.instagram.com/whoisaqibj/"
        />
        <SocialMediaIcon
          title="spotify"
          imageUrl="/assets/spotifyIcon.svg"
          href="https://www.spotify.com/pk-en/account/overview/"
        />
      </div>

      <a
        className="mt-8 mb-16"
        href="https://linktr.ee/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          className="cursor-pointer"
          alt="footerLogo"
          src="/assets/linktreeLogo.svg"
          width={96}
          height={96}
        />
      </a>
    </section>
  );
};

export default Footer;
