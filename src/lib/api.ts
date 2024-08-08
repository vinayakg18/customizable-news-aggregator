export interface Article {
    id: string;
    title: string;
    description: string;
    url: string;
    image?: string;
  }
  
  export const fetchArticles = async (category: string, searchTerm: string, page: number = 1): Promise<Article[]> => {
    let url = `https://api.currentsapi.services/v1/latest-news?apiKey=4Ix0Vz4UEs8YHWYbia6MPpm8nPQWlnyGuuZ9hEw_RWggIZay&page=${page}`;
  
    if (category && category !== 'home') {
      url += `&category=${category}`;
    }
  
    if (searchTerm) {
      url = `https://api.currentsapi.services/v1/search?keywords=${searchTerm}&apiKey=4Ix0Vz4UEs8YHWYbia6MPpm8nPQWlnyGuuZ9hEw_RWggIZay&page=${page}`;
    }
    
    const response = await fetch(url);
    const data = await response.json();
    
    return data.news.map((article: any) => ({
      id: article.id,
      title: article.title,
      description: article.description,
      url: article.url,
      image: article.image
    }));
  };
  