import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
  width: 250px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
`;

export const Description = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 30px;
  border: 1px solid #b4b4b4;
`;

export const Name = styled.p`
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  color: grey;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  color: grey;
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
  background-color: #ebebeb;
  border-top: 1px solid #b4b4b4;
  li {
    padding: 20px 0;
    width: 33.33%;
  }
  li:not(:last-child) {
    border-right: 1px solid #b4b4b4;
  }
`;

export const Label = styled.span`
  display: block;
  font-size: 12px;
  color: grey;
  text-align: center;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  display: block;
  font-weight: 700;
  text-align: center;
`;
