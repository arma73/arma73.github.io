import { SocialLink } from "#web/components/links";
import { SocialIcons, RSSIcon } from "#web/components/icons";
import { SiteLinks, SiteSocialLinks } from "#web/configs/site";

const SocialLinks = () => {
    return (
        <div className="mt-6 flex items-center gap-6">
            <SocialLink
                href={SiteSocialLinks.TWITTER}
                aria-label="Follow on Twitter"
                icon={SocialIcons.Twitter}
            />
            <SocialLink
                href={SiteSocialLinks.GITHUB}
                icon={SocialIcons.GitHub}
            />
            <SocialLink
                href={SiteSocialLinks.LINKEDIN}
                aria-label="Follow on LinkedIn"
                icon={SocialIcons.LinkedIn}
            />
            <SocialLink
                href={SiteSocialLinks.NPM}
                size="sm"
                aria-label="Follow on NPM"
                icon={SocialIcons.Npm}
            />
            <SocialLink
                href={SiteLinks.RSS}
                size="sm"
                aria-label="Follow on LinkedIn"
                icon={RSSIcon}
            />
        </div>
    );
};

export default SocialLinks;
