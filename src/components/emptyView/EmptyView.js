import React from 'react';

import './EmptyView.scss';

function EmptyView({text="No Results"}) {
    return (
        <div className="emptyView">{text}</div>
    );
}

export default EmptyView;