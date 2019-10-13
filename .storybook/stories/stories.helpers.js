import React from 'react';

export const renderProps = props => (
  <div className="story-section-props">
    {
      props.map((prop, index) => (
        <div className="story-prop" key={`story-prop-${index}`}>
          <div className="story-prop-left">
            <div className="story-prop-name text--sm">{prop.name}</div>
            {
              prop.required
                ? <div className="story-prop-required text--xs">Required</div>
                : null
            }
            
          </div>
          <div className="story-prop-right">
            <div className="story-prop-type-and-default">
              <div className="story-prop-type text--s">
                {
                  prop.type
                    ? <div className="story-code">{prop.type}</div>
                    : null
                }
                
              </div>
              <div className="story-prop-default text--s">{prop.default}</div>
            </div>
            <div className="story-prop-content text--sm">{prop.content}</div>
          </div>
        </div>
      ))
    }
  </div>
)