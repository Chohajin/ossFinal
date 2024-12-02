import React from 'react';
import './Common.css'; // 경로 유지

export default function Body() {
  return (
    <>
    <div className="recommand">
      <p className="seoul-recommand">서울 추천 맛집</p> <br/>
      <a className="region-recommand">지역별</a>
      <a className="theme-recommand">테마별</a>
    </div>

    <div className="content"> {/* class -> className 수정 */}
      <h2>조회수 순 맛집 랭킹</h2>
      <div className="restaurant-list"> {/* class -> className 수정 */}
        <div className="restaurant"> {/* class -> className 수정 */}
          <h3>맛집 1</h3>
          <p>이곳은 맛집 1의 간단한 설명입니다.</p>
        </div>
        <div className="restaurant">
          <h3>맛집 2</h3>
          <p>이곳은 맛집 2의 간단한 설명입니다.</p>
        </div>
        <div className="restaurant">
          <h3>맛집 3</h3>
          <p>이곳은 맛집 3의 간단한 설명입니다.</p>
        </div>
      </div>
    </div>

    <div className="content"> {/* class -> className 수정 */}
      <h2>좋아요 순 맛집 랭킹</h2>
      <div className="restaurant-list"> {/* class -> className 수정 */}
        <div className="restaurant"> {/* class -> className 수정 */}
          <h3>맛집 1</h3>
          <p>이곳은 맛집 1의 간단한 설명입니다.</p>
        </div>
        <div className="restaurant">
          <h3>맛집 2</h3>
          <p>이곳은 맛집 2의 간단한 설명입니다.</p>
        </div>
        <div className="restaurant">
          <h3>맛집 3</h3>
          <p>이곳은 맛집 3의 간단한 설명입니다.</p>
        </div>
      </div>
    </div>
    </>
  );
}
