import { FC, useMemo } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { IOffer } from '../../../interfaces/offer.interface';
import { Actions } from '../../../emuns/actions.enum';
import { AppRoute } from '../../../emuns/app-route.emun';

import { useAppSelector } from '../../../store/hooks';

/**
 * Интерфейс компонента карточки предложения.
 * @prop {boolean | undefined} isNearPlaces - Предложения рядом?
 */
interface IOfferProps extends IOffer {
  onClick: (id: string, isFavorite: boolean) => void;
  isNearPlaces?: boolean;
}

/**
 * Компонент карточки предложения.
 * @param {ICard} params  - Входные парамтеры компонента.
 * @returns {JSX.Element}
 */
export const OfferCard: FC<IOfferProps> = ({
  id,
  title,
  type,
  previewImage,
  price,
  rating,
  onClick,
  isFavorite = false,
  isPremium = false,
  isNearPlaces = false,
}): JSX.Element => {

  const isAuthorized = useAppSelector((state) => state[Actions.user].authorizationStatus);

  const card = useMemo(() => (
    <article className={classNames(isNearPlaces ? 'near-places__card' : 'cities__card', 'place-card')}>
      {
        isPremium ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div> :
          null
      }
      <div className={classNames(isNearPlaces ? 'near-places__image-wrapper' : 'cities__image-wrapper', 'place-card__image-wrapper')}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {isAuthorized ?
            <button
              className={classNames('place-card__bookmark-button', 'button', isFavorite ? 'place-card__bookmark-button--active' : '')}
              type="button"
              onClick={() => onClick(String(id), isFavorite)}
            >
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button> :
            <Link to={AppRoute.Login} className={classNames('place-card__bookmark-button', 'button')} >
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </Link>}
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ 'width': `${Math.floor(rating + 0.5) * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article >
  ), [isAuthorized, isFavorite, rating, price, id, isNearPlaces, isPremium, onClick, previewImage, title, type]);

  return card;
};
