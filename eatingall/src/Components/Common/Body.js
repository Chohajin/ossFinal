import React from 'react';
import './Common.css'; // 경로 유지

export default function Body() {
  return (
    <>
    <div className="content"> {/* class -> className 수정 */}
      <h2>추천 맛집</h2>
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
