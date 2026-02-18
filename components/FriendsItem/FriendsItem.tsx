import { type Friend } from '@/types/api-types';
import Image from 'next/image';
import css from '../../app/(public)/friends/Friends.module.css';
import Link from 'next/link';

type Props = { item: Friend };

const FriendsItem = ({ item }: Props) => {
  const workingHours = (() => {
    if (!item.workDays || item.workDays.length === 0) {
      return 'Day and night';
    }

    const openDay = item.workDays.find(day => day.isOpen && day.from && day.to);

    return openDay ? `${openDay.from} - ${openDay.to}` : 'Day and night';
  })();
  return (
    <li className={css.itemContainer}>
      <div className={css.imageBox}>
        {item.addressUrl ? (
          <Link
            href={item.addressUrl}
            className={css.imageLink}
            target="_blank"
          >
            <Image
              className={css.image}
              src={item.imageUrl}
              alt={item.title}
              width={80}
              height={80}
            />
          </Link>
        ) : (
          <Image
            className={css.image}
            src={item.imageUrl}
            alt={item.title}
            width={80}
            height={80}
          />
        )}
      </div>
      <div className={css.infoBox}>
        <div className={css.time}>
          <p className={css.timeText}>{workingHours}</p>
        </div>
        <div>
          <p className={css.infoTitle}>{item.title}</p>
          <ul className={css.infoList}>
            <li>
              <p className={css.infoData}>
                <span className={css.infoSpan}>Email: </span>
                {item.email}
              </p>
            </li>
            <li>
              <p className={css.infoData}>
                <span className={css.infoSpan}>Address: </span>
                {item.address}
              </p>
            </li>
            <li>
              <p className={css.infoData}>
                <span className={css.infoSpan}>Phone: </span>
                {item.phone}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default FriendsItem;
