import { MouseEvent } from 'react';
import style from '~/App.module.scss';

import CustomButton from '~/components/CustomButton';

const App = () => {
  const handleClick = () => {
    alert('ボタンがクリックされました');
  };

  const handleLinkClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!window.confirm('リンク先に移動しますか？')) {
      e.preventDefault();
    }
  };

  const EditIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
  );
  const SaveIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160v212q-19-8-39.5-10.5t-40.5.5v-169L647-760H200v560h240v80H200Zm0-640v560-560ZM520-40v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-260L643-40H520Zm300-263-37-37 37 37ZM580-100h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19ZM240-560h360v-160H240v160Zm240 320h4l116-115v-5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/></svg>
  );
  const NewTab = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
  )

  return (
    <>
      <div className={style.root}>
        <h1>CustomButtonコンポーネント</h1>
        <div className={style.buttonList}>
          <div>
            <CustomButton label="編集" onClick={handleClick}/>
          </div>
          <div>
            <CustomButton label="編集（白背景）" color="white" onClick={handleClick}/>
          </div>
          <div>
            <CustomButton label="編集（枠線）" color="border" onClick={handleClick}/>
          </div>
        </div>
        <h2>非活性</h2>
        <div className={style.buttonList}>
          <div>
            <CustomButton label="編集" disabled onClick={handleClick}/>
          </div>
        </div>
        <h2>ローディング中</h2>
        <div className={style.buttonList}>
          <div>
            <CustomButton label="編集" isLoading onClick={handleClick}/>
          </div>
          <div>
            <CustomButton label="編集" isLoading loadingLabel="送信中" onClick={handleClick}/>
          </div>
        </div>
        <h2>アイコン左</h2>
        <div className={style.buttonList}>
          <div>
            <CustomButton label="編集" iconLeft={EditIcon} onClick={handleClick}/>
          </div>
          <div>
            <CustomButton label="編集" iconLeft={EditIcon} color="white" onClick={handleClick}/>
          </div>
          <div>
            <CustomButton label="保存" iconLeft={SaveIcon} color="border" onClick={handleClick}/>
          </div>
        </div>
        <h2>アイコン左</h2>
        <div className={style.buttonList}>
          <div>
            <CustomButton label="編集" iconRight={EditIcon} onClick={handleClick}/>
          </div>
          <div>
            <CustomButton label="保存" iconRight={SaveIcon} onClick={handleClick}/>
          </div>
          <div>
            <CustomButton label="保存" iconRight={SaveIcon} onClick={handleClick} disabled/>
          </div>
        </div>
        <h2>リンク</h2>
        <div className={style.buttonList}>
          <div>
            <CustomButton label="詳しく見る" href="https://example.com" />
          </div>
          <div>
            <CustomButton label="詳しく見る（別タブ）" href="https://example.com" target="_blank" iconRight={NewTab} color="white"/>
          </div>
          <div>
            <CustomButton label="詳しく見る" href="https://example.com" disabled/>
          </div>
          <div>
            <CustomButton label="リンク確認" href="https://example.com" target="_blank" onClick={handleLinkClick} iconRight={NewTab} color="border"/>
          </div>
        </div>
        <h2>大きめのボタン</h2>
        <div className={style.largeButton}>
          <CustomButton label="編集" onClick={handleClick}/>
        </div>
        <form action="#" className={style.form}>
          <h2>フォーム送信ボタン</h2>
          <label htmlFor="email">
            メールアドレス
            <input type="text" id="email" name="email"/>
          </label>
          <div className={style.submitButton}>
            <CustomButton label="送信" type="submit" color='border'/>
          </div>
        </form>
      </div>
    </>
  )
};

export default App;
