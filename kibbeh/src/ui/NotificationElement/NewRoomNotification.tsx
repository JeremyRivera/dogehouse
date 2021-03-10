import React from "react";
import { GenericNotification } from "./GenericNotification";
import { Button } from "../Button";
import { LgSolidRocket } from "../../icons";

export interface NewRoomNotificationProps {
  username: string;
  userProfileLink?: string;
  time: string;
  joined?: boolean;
}

export const NewRoomNotification: React.FC<NewRoomNotificationProps> = ({
  username,
  userProfileLink,
  time,
  joined = false,
}) => {
  const icon = <LgSolidRocket />;

  const notificationMsg = (
    <>
      <a
        className="font-bold"
        {...(userProfileLink ? { href: userProfileLink } : {})}
      >
        {username}&nbsp;
      </a>
      <span>created a room</span>
    </>
  );

  const followButton = (
    <Button
      size="small"
      color={joined ? "secondary" : "primary"}
      style={{ width: "90px" }}
    >
      {joined ? "Joined" : "Join room"}
    </Button>
  );

  return (
    <GenericNotification
      icon={icon}
      notificationMsg={notificationMsg}
      time={time}
      actionButton={followButton}
    />
  );
};
