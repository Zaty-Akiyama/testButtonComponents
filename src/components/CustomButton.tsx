import { MouseEventHandler } from 'react';
import style from '~/components/CustomButton.module.scss';
import classnames from '~/utilities/classnames';

interface CustomButtonProps {
  label: string;
  color?: 'black' | 'white' | 'border';
  type?: 'submit';
  disabled?: boolean;
  isLoading?: boolean;
  loadingLabel?: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
};

/**
 * 
 * @param props
 * @param props.label　ボタンのテキストラベル
 * @param String props.color ボタンの色
 * @param props.type  type="submit" にするとフォームの送信ボタンとして使える
 * @param props.disabled  ボタンを無効にする
 * @param props.isLoading ボタンをローディング状態にする
 * @param props.iconLeft ボタンの左側に表示するアイコン
 * @param props.iconRight ボタンの右側に表示するアイコン
 * @param props.href ボタンをリンクとして使う場合のリンク先
 * @param props.target  リンク先の表示方法
 * @param props.onClick ボタンクリック時のイベントハンドラ
 * 
 * @returns JSX.Element
 */
const CustomButton = ({
  label,
  color = 'black',
  type,
  disabled = false,
  isLoading = false,
  loadingLabel,
  iconLeft,
  iconRight,
  href,
  target,
  onClick = () => {},
}: CustomButtonProps): JSX.Element => {
  const isDisabled = disabled || isLoading;

  const buttonContent: JSX.Element = (
    <>
      {iconLeft && <span className={classnames(style.icon, style.iconLeft)}>{iconLeft}</span>}
      <span>
        {isLoading ? (loadingLabel || 'ローディング中') : label}
      </span>
      {iconRight && <span className={classnames(style.icon, style.iconRight)}>{iconRight}</span>}
    </>
  );

  const handleClick: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = (e) => {
    if (isDisabled) {
      e.preventDefault();
      return;
    }
    onClick(e);
  }

  return (
    <>
      {
        href
        ? (
          <a
            className={classnames(style.button, style[color], isDisabled && style.disabled)}
            href={href}
            aria-disabled={isDisabled}
            target={target}
            onClick={handleClick}
            tabIndex={isDisabled ? -1 : 0}
          >
            {buttonContent}
          </a>
        )
        : (
          <button
            className={classnames(style.button, style[color], isDisabled && style.disabled)}
            type={type}
            disabled={isDisabled}
            onClick={handleClick}
          >
            {buttonContent}
          </button>
        )
      }
    </>
  );
};

export default CustomButton;