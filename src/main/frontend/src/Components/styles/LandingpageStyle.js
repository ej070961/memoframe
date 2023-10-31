import styled from 'styled-components';

export const LandingLayout = styled.div`
    width: 100%;
    height: 100vh;
    background: #E8EBED;
`
export const MapInfoWrapper = styled.div`
    width: 80%;
    margin: 2.5rem 10rem 2rem 10rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    .mapinfo_text{
        color: #000;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 500;
        margin: 0.4rem 0 0.4rem 0.5rem;
    }
    .mapinfo_search{
        color: #000;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 500;
        padding: 0rem 0 0.1rem 0.5rem;
    }
    hr{
        width: 100%;
        height: 0.03rem;
        margin:0;
        background: #D9D9D9;
    }
`
export const SearchInput = styled.input`
    margin: 0 0.5rem 0.5rem 0.5rem;
    height: 3rem;
    flex-shrink: 0;
    border-radius: 10px;
    border: 3px solid #D9D9D9;
    background: #FFF;

`
export const ResultContainer = styled.div`
    margin: 0 0.5rem 0 0.5rem;
    height: 35rem;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    border: 3px solid #D9D9D9;
    background: #FFF;
`
