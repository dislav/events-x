import type { Event } from 'content-collections';

import { Contacts, Section, Social, YandexMap } from '@/shared/ui';
import { contactsSectionStyles } from './ContactsSection.styles';

interface ContactsSectionProps {
    className?: string;
    contacts: Event['contacts'];
    socials?: Event['socials'];
    location: Event['location'];
}

export default function ContactsSection({
    className,
    contacts,
    socials,
    location,
}: ContactsSectionProps) {
    const styles = contactsSectionStyles();

    return (
        <Section id="contacts" className={styles.base({ className })}>
            <div className={styles.wrapper()}>
                <div className={styles.column()}>
                    <Contacts
                        className={styles.contacts()}
                        organizer={contacts.organizer}
                        address={contacts.address}
                        phones={contacts.phones}
                        emails={contacts.emails}
                        socials={
                            socials && (
                                <div className={styles.socials()}>
                                    {socials.map((social) => (
                                        <Social
                                            key={social.url}
                                            url={social.url}
                                            type={social.type}
                                            className={styles.socialItem()}
                                        />
                                    ))}
                                </div>
                            )
                        }
                    />
                </div>

                {location && location.map && (
                    <div className={styles.column()}>
                        <YandexMap
                            className="rounded-3xl overflow-hidden"
                            location={{
                                center: [
                                    location.map.latitude,
                                    location.map.longitude,
                                ],
                                zoom: location.map.zoom,
                            }}
                        />
                    </div>
                )}
            </div>
        </Section>
    );
}
