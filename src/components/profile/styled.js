import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  color: white;
  background-color: #0d1117;
  border-radius: 20px;
`;

export const ImgProfile = styled.img`
  border-radius: 50%;
  margin: 10px;
`;

export const ContainerInfoUserName = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  margin-left: 30px;

  .username {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 20px;
  }
  .username h4 {
    margin-right: 15px;
    color:#DAA520 ;
  }
  .username a {
    text-decoration: none;
    color: white;
  }
`;
export const ContainerstatusFalow = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  margin-left: 30px;
  

 .statusFalow {
    display: flex;
    align-items: center;
    color: white;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .fallowers {
    display: flex;
    flex-wrap: wrap;
    margin-right: 10px;
    padding: 5px;
    border: 1px solid white;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;

    color: white;
    align-items: center;
  }
  .fallowers h4 {
    margin-right: 10px;
    margin-left: 10px;
    color:  	#00FA9A;
  }
  .fallowers span {
    margin-right: 10px;
    
  }
  
  .fallowings {
    display: flex;
    padding: 5px;
    align-items: center;
    border: 1px solid white;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    color: white;
  }
  .fallowings h4 {
    margin-right: 10px;
    margin-left: 10px;
    color:  	#DAA520;
  }
  .fallowings span {
    margin-right: 10px;
  }
`;
export const ContainerStatusCount = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  color:  	  	#3CB371;
  margin-left: 30px;
  border: 1px solid white;
  padding: 10px;
  margin-bottom: 20px;
  .avatar,
   .company,
   .location,
   .public_gists,
   .public_repos,
   .html_url,
   .stargazers_count,
   .repos_url,
   .watchers_count,
   .language,
   .visibility,
   .watchers
   {
    display: flex;
    margin-bottom: 10px;
    align-items: center;
  
  }
  .avatar h4 ,
  .company h4,
  .location h4,
  .public_gists h4,
  .public_repos h4,
  .repos_url h4,
  .html_url h4 ,
  .stargazers_count h4,
  .watchers_count h4,
  .language h4,
  .visibility h4,
  .watchers h4
  {
    margin-right: 15px;
    font-size: 20px;
  }
  .avatar a,
  .repos_url a ,
  .html_url a{
    color: #00BFFF;
  }
  span{
    color:  	#B0C4DE;
  }
 
`;

export const ContainerCountFSF = styled.div`
  display: flex;
  .counts {
    display: flex;
    justify-content: space-around;
    width: 300px;
    height: 30px;
    align-items: center;
    margin-left: 20px;
    background-color: black;
  }
`;
