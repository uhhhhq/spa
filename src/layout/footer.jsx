function Footer() {
   return (
      <footer className="page-footer #64b5f6 blue lighten-2">
         <div className="footer-copyright">
            <div className="container">
               by uhq © {new Date().getFullYear()}
               <a className="grey-text text-lighten-4 right" href="">
                  Repository
               </a>
            </div>
         </div>
      </footer>
   );
}
export {Footer};
