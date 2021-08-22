export const getCurrentTime = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hh = now.getHours();
  const mm = now.getMinutes();
  const ss = now.getSeconds();

  return `${year}년 ${month < 10 ? '0' + month : month}월 ${
    date < 10 ? '0' + date : date
  }일 ${hh < 10 ? '0' + hh : hh}시 ${mm < 10 ? '0' + mm : mm}분 ${
    ss < 10 ? '0' + ss : ss
  }초`;
};
