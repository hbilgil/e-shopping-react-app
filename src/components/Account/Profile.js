import React from 'react';
import styled from 'styled-components';

const Profile = () => {
    return (
        <ProfileContainer>
            <ProfileCard>
                <h1>
                    YOUR PROFILE
                </h1>
                <UserDiv>
                    <UserImg src="(user.photoURL) ? user.photoURL : 'assets/dummy-user.png'" alt="user.displayName"/>
                    <UserInfos>
                        <Para>
                            User Name: <StrongPara>User</StrongPara>
                        </Para>
                        <Para>
                            User ID: <StrongPara>ID</StrongPara>
                        </Para>
                        <Para>
                            Email: <StrongPara>Email</StrongPara>
                        </Para>
                        <Para>
                            Email Verified: <StrongPara>True</StrongPara>
                        </Para>
                    </UserInfos>
                </UserDiv>
            </ProfileCard>
        </ProfileContainer>
    );
}

const ProfileContainer = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    font-family: 'Dosis', sans-serif;
`;

const ProfileCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.lightFooter};
    margin-top: 30px;
    padding: 3rem;
    gap: 2rem;
    font-size: 1rem;
    border-radius: 4px;
    box-shadow: #0000002f 0 5px 5px;
    width: 28rem;
    @media only screen and (max-width: 750px) { /*responsive design styling*/
        padding: 1rem;
        width: 18rem;
    }
`;

const UserDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`;

const UserImg = styled.img`
    height: 8rem;
    width: 8rem;
    border-radius: 50%;
    border: 1px solid crimson;
`;

const UserInfos = styled.div`
    align-self: flex-start;
`;

const Para = styled.p`
    font-size: 1.2rem;
    @media only screen and (max-width: 750px) { /*responsive design styling*/
        font-size: 0.8rem;
    }
`;

const StrongPara = styled.strong`
    color: crimson;
`;


export default Profile;