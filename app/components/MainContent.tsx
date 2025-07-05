// components/MainContent.tsx
import React from 'react';

interface MainContentProps {
  children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <div id="fl-main-content" className="fl-page-content" itemProp="mainContentOfPage" role="main">
      <div className="fl-content-full container">
        <div className="row">
          <div className="fl-content col-md-12">
            <article className="fl-post post-3744 page type-page status-publish hentry" id="fl-post-3744" itemScope itemType="https://schema.org/CreativeWork">
              <div className="fl-post-content clearfix" itemProp="text">
                <div className="fl-builder-content fl-builder-content-3744 fl-builder-content-primary fl-builder-global-templates-locked" data-post-id="3744">
                  {children}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;