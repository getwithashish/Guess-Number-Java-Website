import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Guess extends HttpServlet{
	public void doGet(HttpServletRequest req,HttpServletResponse res) throws IOException {
		try {
			int num = Integer.parseInt(req.getParameter("num"));
			double rawRandNo = Math.random();
			int randNo = (int) (rawRandNo * 10);
			if(num == randNo) {
				res.setContentType("application/json");
				res.getWriter().println("[1,"+randNo+"]");
			}
			else {
				res.setContentType("application/json");
				res.getWriter().println("[0,"+randNo+"]");
			}
			System.out.println("Result: "+randNo);
		}
		catch(Exception e) {
			
			res.sendRedirect("index.html");
		}
	}
}
