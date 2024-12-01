import React from "react";
import { Link } from "react-router-dom";
import "./Common.css"; // 경로 수정

export default function Header() {
    return (
        <>
        <header>
            <h1>맛집 검색 플랫폼</h1>
        </header>
        <div className="search-container"> {/* class -> className 수정 */}
        <input type="text" placeholder="지역명 또는 음식명을 입력하세요..." /> {/* 빠진 input 추가 */}
        <button type="submit">검색</button>
      </div>
      </>
    );
}
