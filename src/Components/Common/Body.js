import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Common.css";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const API_URL = "http://apis.data.go.kr/6260000/FoodService/getFoodKr";
  const API_KEY =
    "tZ8%2BBiaaU1zFRCLRmv119pWkvT%2FsGdT2PBKdKaz3XVAQaEXlW9OYyvrOjlAojAcPC2N30Z83cW1%2FGg7Y0ox68g%3D%3D";

  useEffect(() => {
    const fetchRestaurants = async () => {
      console.log("fetchRestaurants 호출됨");
      setLoading(true);
      try {
        const pages = [1, 2];
        const pagePromises = pages.map((pageNo) =>
          fetch(
            `${API_URL}?serviceKey=${API_KEY}&numOfRows=10&pageNo=${pageNo}&resultType=json`
          )
            .then((response) => {
              console.log(`페이지 ${pageNo} 상태 코드:`, response.status);
              if (!response.ok) {
                throw new Error(`페이지 ${pageNo} 요청 실패: ${response.status}`);
              }
              return response.json();
            })
            .catch((err) => {
              console.error(`페이지 ${pageNo} 요청 중 오류 발생:`, err);
              return null;
            })
        );

        const results = await Promise.all(pagePromises);
        console.log("모든 페이지 결과:", results);

        const allItems = results.flatMap((result) =>
          result ? result.getFoodKr?.item || [] : []
        );
        console.log("병합된 데이터:", allItems);

        if (allItems.length > 0) {
          const enrichedRestaurants = allItems.map((restaurant) => ({
            ...restaurant,
            likes: 0,
            scraps: 0,
            views: 0,
          }));
          setRestaurants(enrichedRestaurants);
        } else {
          setError("조건에 맞는 데이터를 찾을 수 없습니다.");
        }
      } catch (err) {
        console.error("fetchRestaurants 전체 오류:", err);
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  const increaseLikes = (index) => {
    setRestaurants((prevRestaurants) => {
      const updatedRestaurants = [...prevRestaurants];
      updatedRestaurants[index].likes += 1;
      return updatedRestaurants;
    });
  };

  const increaseScraps = (index) => {
    setRestaurants((prevRestaurants) => {
      const updatedRestaurants = [...prevRestaurants];
      updatedRestaurants[index].scraps += 1;
      return updatedRestaurants;
    });
  };

  const handleDetailPage = (index, restaurant) => {
    setRestaurants((prevRestaurants) => {
      const updatedRestaurants = [...prevRestaurants];
      updatedRestaurants[index].views += 1;
      return updatedRestaurants;
    });
    navigate(`/detail/${restaurant.UC_SEQ}`, { state: restaurant });
  };

  return (
    <>
      <div className="recommand">
        <p className="busan-recommand">부산 추천 맛집</p>
        <a className="region-recommand">지역별</a>
        <a className="theme-recommand">테마별</a>
      </div>

      {loading && <p>데이터를 불러오는 중입니다...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && !error && (
        <>
          <div className="content">
            <h2>추천 맛집</h2>
            <div className="restaurant-list">
              {restaurants.map((restaurant, index) => (
                <div
                  key={restaurant.UC_SEQ}
                  className="restaurant"
                  onClick={() => handleDetailPage(index, restaurant)}
                  onMouseEnter={() => {
                    setRestaurants((prev) => {
                      const updated = [...prev];
                      updated[index].views += 1;
                      return updated;
                    });
                  }}
                >
                  <h3>{restaurant.MAIN_TITLE || "이름 정보 없음"}</h3>
                  <img
                    src={restaurant.MAIN_IMG_NORMAL || ""}
                    alt={restaurant.MAIN_TITLE || "이미지 없음"}
                  />
                  <p>{restaurant.ITEMCNTNTS || "설명 정보 없음"}</p>
                  <div className="actions">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        increaseLikes(index);
                      }}
                    >
                      👍 좋아요 ({restaurant.likes})
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        increaseScraps(index);
                      }}
                    >
                      📌 스크랩 ({restaurant.scraps})
                    </button>
                    <p>👀 조회수: {restaurant.views}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="content">
            <h2>좋아요 순 맛집</h2>
            <div className="restaurant-list">
              {[...restaurants]
                .sort((a, b) => b.likes - a.likes)
                .map((restaurant) => (
                  <div key={restaurant.UC_SEQ} className="restaurant">
                    <h3>{restaurant.MAIN_TITLE || "이름 정보 없음"}</h3>
                    <img
                      src={restaurant.MAIN_IMG_NORMAL || ""}
                      alt={restaurant.MAIN_TITLE || "이미지 없음"}
                    />
                    <p>{restaurant.ITEMCNTNTS || "설명 정보 없음"}</p>
                    <div className="actions">
                      <p>👍 좋아요: {restaurant.likes}</p>
                      <p>📌 스크랩: {restaurant.scraps}</p>
                      <p>👀 조회수: {restaurant.views}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Body;
