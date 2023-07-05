import { FC, useEffect, useRef } from "react";

export const MainMessageList: FC = () => {

  // default position chat scroll to bottom
  const scrollableRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scrollableElement = scrollableRef.current;
    if (scrollableElement) {
      scrollableElement.scrollTop = scrollableElement.scrollHeight;
    }
  }, []);

  return (
    <div className="chatpanel__message-list" ref={scrollableRef}>
      <div className="chatpanel__data">Yesterday</div>
      <div className="chatpanel__message">
        <div className="chatpanel__message-title">
          Hey, have you thought more about buying land in France?
        </div>
        <div className="chatpanel__message-time">16:49</div>
      </div>
      <div className="chatpanel__message chatpanel__message-my">
        <div className="chatpanel__message-title">
          Yeah, I've been doing some research.
        </div>
      </div>
      <div className="chatpanel__message chatpanel__message-my">
        <div className="chatpanel__message-title">
          It seems like a good investment.
        </div>
        <div className="chatpanel__message-time">16:51</div>
      </div>
      <div className="chatpanel__data">Today</div>
      <div className="chatpanel__message">
        <div className="chatpanel__message-title">
          Definitely. Do you have any specific areas in mind?
        </div>
        <div className="chatpanel__message-time">13:22</div>
      </div>
      <div className="chatpanel__message chatpanel__message-my">
        <div className="chatpanel__message-title">
          I was thinking about the Provence region. It's beautiful and has a
          great climate. I found a few real estate agents who specialize in
          French property. I'm planning to contact them soon.
        </div>
        <div className="chatpanel__message-time">13:34</div>
      </div>
      <div className="chatpanel__message">
        <div className="chatpanel__message-title">
          Good idea. Let me know if you need any help with the process.
        </div>
        <div className="chatpanel__message-time">13:35</div>
      </div>
      <div className="chatpanel__message chatpanel__message-my">
        <div className="chatpanel__message-title chatpanel__message-title--grad7">
          Thanks, I will. I'm really excited about the idea of owning a piece of
          land in France.
        </div>
        <div className="chatpanel__message-time">13:43</div>
      </div>
      <div className="chatpanel__message chatpanel__message-my">
        <div className="chatpanel__message-title chatpanel__message-title--grad6">
          Thanks, I will. I'm really excited about the idea of owning a piece of
          land in France.
        </div>
        <div className="chatpanel__message-time">13:43</div>
      </div>
      <div className="chatpanel__message chatpanel__message-my">
        <div className="chatpanel__message-title chatpanel__message-title--grad5">
          Thanks, I will. I'm really excited about the idea of owning a piece of
          land in France.
        </div>
        <div className="chatpanel__message-time">13:43</div>
      </div>
      <div className="chatpanel__message chatpanel__message-my">
        <div className="chatpanel__message-title chatpanel__message-title--grad4">
          Thanks, I will. I'm really excited about the idea of owning a piece of
          land in France.
        </div>
        <div className="chatpanel__message-time">13:43</div>
      </div>
      <div className="chatpanel__message chatpanel__message-my">
        <div className="chatpanel__message-title chatpanel__message-title--grad3">
          Thanks, I will. I'm really excited about the idea of owning a piece of
          land in France.
        </div>
        <div className="chatpanel__message-time">13:43</div>
      </div>
      <div className="chatpanel__message chatpanel__message-my">
        <div className="chatpanel__message-title chatpanel__message-title--grad2">
          Thanks, I will. I'm really excited about the idea of owning a piece of
          land in France.
        </div>
        <div className="chatpanel__message-time">13:43</div>
      </div>
      <div className="chatpanel__message chatpanel__message-my">
        <div className="chatpanel__message-title chatpanel__message-title--grad1">
          Thanks, I will. I'm really excited about the idea of owning a piece of
          land in France.
        </div>
        <div className="chatpanel__message-time">13:43</div>
      </div>
    </div>
  );
};
