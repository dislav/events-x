import type { Event } from 'content-collections';
import { Contacts, Section, Social, YandexMap } from '@/shared/ui';

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
    return (
        <Section id="contacts" className={className}>
            <div className="flex gap-8">
                <div className="flex-1">
                    <Contacts
                        organizer={contacts.organizer}
                        address={contacts.address}
                        phones={contacts.phones}
                        emails={contacts.emails}
                        socials={
                            socials && (
                                <div className="flex items-center gap-2">
                                    {socials.map((social) => (
                                        <Social
                                            key={social.url}
                                            url={social.url}
                                            type={social.type}
                                        />
                                    ))}
                                </div>
                            )
                        }
                    />
                </div>

                {location && location.map && (
                    <div className="flex-1">
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
