class Sample{
	int rollNo ;
	String name;
	String branch;
	String college;
	Sample(int rollNo, String name, String branch, String college){
		this.rollNo = rollNo;
		this.name = name ;
		this.branch = branch ;
		this.college = college;
	}
	public void display(){
		System.out.println("RollNo - " + rollNo);
		System.out.println("Name - " + name);
		System.out.println("Branch - " + branch);
		System.out.println("College - " + college);
	}
    public static void main(String[] arg){
		Sample s1 = new Sample(5,"Raj","CSE","ABES");
		Sample s2 = new Sample(10,"Rishu","CSE","ABES");
		s1.display();
		System.out.println("--------------------------");
		s2.display();
		
    }
}