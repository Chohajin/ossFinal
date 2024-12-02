import React from "react";
import "./Common.css"; // 경로 수정

export default function Header() {
    return (
        <>
            <header className="header-container">
                <a className="title">다먹자</a>
                <div className="search-container"> {/* a 태그 -> div로 변경 */}
                    <input type="text" placeholder="지역명 또는 음식명을 입력하세요..." />
                    <button type="submit">검색</button>
                </div>
                <div className="login">
                    <button type="submit">로그인</button>
                </div>

                
            </header>
        </>
    );
}
