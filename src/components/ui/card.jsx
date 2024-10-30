import * as React from "react";
import classNames from 'classnames';

const Card = React.forwardRef((props, ref) => {
  const { className, ...other } = props;
  return (
    <div
      ref={ref}
      className={classNames("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
      {...other}
    />
  );
});

const CardHeader = React.forwardRef((props, ref) => {
  const { className, ...other } = props;
  return (
    <div
      ref={ref}
      className={classNames("flex flex-col space-y-1.5 p-6", className)}
      {...other}
    />
  );
});

// Fixed the heading accessibility warning by ensuring content is passed
const CardTitle = React.forwardRef((props, ref) => {
  const { className, children, ...other } = props;
  return (
    <h3
      ref={ref}
      className={classNames("text-2xl font-semibold leading-none tracking-tight", className)}
      {...other}
    >
      {children}
    </h3>
  );
});

const CardDescription = React.forwardRef((props, ref) => {
  const { className, children, ...other } = props;
  return (
    <p
      ref={ref}
      className={classNames("text-sm text-muted-foreground", className)}
      {...other}
    >
      {children}
    </p>
  );
});

const CardContent = React.forwardRef((props, ref) => {
  const { className, children, ...other } = props;
  return (
    <div 
      ref={ref} 
      className={classNames("p-6 pt-0", className)} 
      {...other} 
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";
CardHeader.displayName = "CardHeader";
CardTitle.displayName = "CardTitle";
CardDescription.displayName = "CardDescription";
CardContent.displayName = "CardContent";

export { Card, CardHeader, CardTitle, CardDescription, CardContent };