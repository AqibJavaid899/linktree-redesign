import Image from "next/image";

import SocialMediaIcon from "./SocialMediaIcon";

interface Props {}

const Footer = (props: Props) => {
  return (
    <section className="flex flex-col justify-center items-center mt-10">
      <div className="flex gap-x-6">
        <SocialMediaIcon
          title="facebook"
          imageUrl="/assets/facebookIcon.svg"
          href="https://www.facebook.com/profile.php?id=100019090278101"
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
          title="twitter"
          imageUrl="/assets/twitterIcon.svg"
          href="https://twitter.com/its_aqibzid"
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

      <a className="mt-10" href="https://linktr.ee/" target="_blank">
        <Image
          className="cursor-pointer"
          alt="footerLogo"
          src="/assets/linktreeLogo.svg"
          width={112}
          height={112}
        />
      </a>
    </section>
  );
};

export default Footer;
