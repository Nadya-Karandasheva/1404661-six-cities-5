import { FC } from 'react';

import { IReviewItem } from '../../../interfaces/components/review-item.interface';

/**
 * Компонент списка отзывов.
 * @returns
 */
export const ReviewItem: FC<IReviewItem> = ({ user, rating, comment, date }) => {

  const persentRating = rating * 20;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ 'width': `${persentRating}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime="2019-04-24">{date}</time>
      </div>
    </li>
  );
};

export default ReviewItem;
